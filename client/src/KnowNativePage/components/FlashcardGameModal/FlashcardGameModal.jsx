import { useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { GiCheckMark } from 'react-icons/gi';
import { PiRepeatBold } from 'react-icons/pi';
import { useSavedWordsContext } from '../../../contexts/SavedWords/SavedWordsProvider';
import './FlashcardGameModal.scss';
import Flashcard from '../Flashcard/Flashcard';

export default function FlashcardGameModal({ selectedFront = 'chinese', showPinyin = true, open, onClose, blurText }) {
    
    const { savedWords } = useSavedWordsContext();
    const [flashcards, setFlashcards] = useState([]);
    const [correctCount, setCorrectCount] = useState(0);
    const [remainingCount, setRemainingCount] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Refs for focus management
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const flipButtonRef = useRef(null);
    const correctButtonRef = useRef(null);
    const incorrectButtonRef = useRef(null);
    const playAgainButtonRef = useRef(null);

    const word = Array.isArray(flashcards) && flashcards.length ? flashcards[0] : null;

    const chinese = word?.frontProperties.traditional;
    const pinyin = word?.frontProperties.pinyin;
    const english = word?.backProperties.meaning;

    const showGame = open && remainingCount > 0;

    function shuffle(cards) {
        // Shuffle the cards using the Fisher-Yates algorithm:
        let i = cards.length;
        while (i > 0) {
            let newIdx = Math.floor(Math.random() * i);
            i--;
            [cards[newIdx], cards[i]] = [cards[i], cards[newIdx]];
        }
    }

    // Handler for keyboard navigation
    const handleKeyDown = useCallback((event) => {
        if (!open) return;

        switch (event.key) {
            // ESC key closes the modal.
            case 'Escape':
                event.preventDefault();
                handleClose();
                break;
            
            // If the card is flipped, ENTER marks the card as *correct*.
            // If the game is complete, ENTER hits *play again*.    
            case 'Enter':
                event.preventDefault();
                if (remainingCount > 0) {
                    if (!isFlipped) {
                        handleToggle();
                    } else {
                        
                        handleCorrect();
                    }
                } else {
                    handlePlayAgain();
                }
                break;

            // The user can use the left arrow to "Try Again"
            case 'ArrowLeft':
                event.preventDefault();
                if (isFlipped && remainingCount > 0) {
                    handleIncorrect();
                }
                break;
            
            // Using the right arrow, marks the word as correct.
            case 'ArrowRight':
                event.preventDefault();
                if (isFlipped && remainingCount > 0) {
                    handleCorrect();
                }
                break;
        }
    }, [open, isFlipped, remainingCount, handleClose, handleToggle, handleCorrect, handleIncorrect, handlePlayAgain]);

    // Handler for when the user clicks outside the modal:
    const handleClickOutside = useCallback((event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClose();
        }
    }, [handleClose]);

    // ** When the modal opens:** 
    // 1) Initialize and shuffle the flashcards array with all of the savedWords.
    // 2) Set the remaining count to the total number of savedWords.
    useEffect(() => {
    if (open && savedWords.length > 0) {
        const allCards = [...savedWords];
        shuffle(allCards);
        setFlashcards(allCards);
        setRemainingCount(allCards.length);
        setCorrectCount(0);
        setIsFlipped(false);
        setIsClosing(false);
    }
    }, [open, savedWords]);

    // 3) Blur the background text
    useEffect(() => {
        if (blurText) {
            blurText(open);
        }
        // Remove text blur when the FlashcardGameModal closes.
        return () => {
            if (blurText) {
                blurText(false);
            }
        };
    }, [open, blurText]);

    // Add keyboard and click event listeners
    useEffect(() => {
        if (open) {
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, handleKeyDown, handleClickOutside]);

    // When the modal opens, focus switches to the modal.
    useLayoutEffect(() => {
        if (open && modalRef.current) {
            modalRef.current.focus();
        }
    }, [open]);

    // Focus management for the buttons:
    useLayoutEffect(() => {
        if (!open) return;

        if (remainingCount > 0) {
            if (!isFlipped && flipButtonRef.current) {
                flipButtonRef.current.focus();
            } else if (isFlipped && correctButtonRef.current) {
                correctButtonRef.current.focus();
            }
        } else if (remainingCount === 0 && playAgainButtonRef.current) {
            playAgainButtonRef.current.focus();
        }
    }, [open, isFlipped, remainingCount]);
    
    function handleClose() {
        setIsClosing(true);
        setFlashcards([]);
        setCorrectCount(0);
        setRemainingCount(0);
        setIsFlipped(false);
        onClose();
    }
    
    function handleCorrect() {
        // If the user marks the card as correct:
        // Update the count.
        // Remove the card marked as *Correct* from the flashcards array.
        // Decrement the remaining cards counter.
        setCorrectCount((count) => count + 1);
        setFlashcards((cards) => cards.slice(1));
        setRemainingCount((count) => Math.max(0, count - 1));
        setIsFlipped(false);
    }

    function handleIncorrect() {
        // If the user marks the word as incorrect:
        // Create a new array by removing the first card and adding it to the end of the array.
        setFlashcards((cards) => (cards.length ? [...cards.slice(1), cards[0]] : cards));
        setIsFlipped(false);
    }

    function handlePlayAgain() {
        const allCards = [...savedWords];
        shuffle(allCards);
        setFlashcards(allCards);
        setCorrectCount(0);
        setRemainingCount(allCards.length);
        setIsFlipped(false);
        setIsClosing(false);
    }

  function handleToggle() {
        setIsFlipped(!isFlipped);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            transitionDuration={420}
            PaperComponent={({ children }) => (
                <div
                    ref={modalRef}
                    style={{
                        width: '60vmin',
                        height: '55vmin',
                        backgroundColor: 'white',
                        color: 'var(--drk-txt)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '1vmin',
                        borderRadius: '2vmin'
                    }}>
                    {children}
                </div>
            )}>
            <DialogActions
                style={{
                    alignSelf: 'flex-end',
                    padding: '0'
                }}>
                <Button 
                    ref={closeButtonRef} 
                    onClick={handleClose}>
                    <IoMdClose className="close-icon" />
                </Button>
            </DialogActions>
            <DialogContent
                style={{
                    width: '75%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {showGame ? (
                    <>
                    <Flashcard
                        chinese={chinese}
                        pinyin={pinyin}
                        english={english}
                        selectedFront={selectedFront}
                        showPinyin={showPinyin}
                        isFlipped={isFlipped}
                    />
                    {isFlipped ? 
                        <div className="flashcard-buttons">
                            <button 
                                ref={correctButtonRef}
                                className="flashcard-buttons__correct-btn"
                                onClick={handleCorrect}>
                                <GiCheckMark className="flashcard-buttons__icon" />
                                Correct!
                            </button>
                            <button 
                                ref={incorrectButtonRef}
                                className="flashcard-buttons__incorrect-btn"
                                onClick={handleIncorrect}>
                                <PiRepeatBold className="flashcard-buttons__icon" />
                                Wrong
                            </button>
                        </div> 
                        : 
                        <button
                            ref={flipButtonRef}
                            type="button"
                            className="button-container__flip-button"
                            onClick={handleToggle}
                        >Show Answer
                        </button>
                    }
                    <div className="flashcard-count">
                        <p>
                            <span className="flashcard-count__correct">{correctCount}</span> Correct
                        </p>
                        <p>
                            <span className="flashcard-count__remaining">{remainingCount}</span> Remaining
                        </p>
                    </div>
                    </> 
                ) : (
                    !isClosing && remainingCount === 0 && (
                        <div className="game-modal__congrats-msg">
                            <div>
                                <dotlottie-player
                                    src="https://lottie.host/9279b8f8-2d84-4077-aaf6-db967f8ec7bb/3JRYmBPJgq.json"
                                    background="transparent"
                                    speed="1"
                                    style={{ height: '20vmin' }}
                                    loop
                                    autoplay>
                                </dotlottie-player>
                            </div>
                            <h2>You completed the deck!</h2>
                            <button 
                                ref={playAgainButtonRef}
                                className="game-modal__play-btn" 
                                onClick={handlePlayAgain}>
                                Play Again
                            </button>
                        </div>
                    )
                )}
                </DialogContent>
        </Dialog>
    );
}