import { useEffect, useState } from 'react';
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

    const word = Array.isArray(flashcards) && flashcards.length ? flashcards[0] : null;

    const chinese = word?.frontProperties.traditional;
    const pinyin = word?.frontProperties.pinyin;
    const english = word?.backProperties.meaning;

    function shuffle(cards) {
        // Shuffle the cards using the Fisher-Yates algorithm:
        let i = cards.length;
        while (i > 0) {
            let newIdx = Math.floor(Math.random() * i);
            i--;
            [cards[newIdx], cards[i]] = [cards[i], cards[newIdx]];
        }
    }

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
    
    function handleClose() {
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
    }

  function handleToggle() {
        setIsFlipped(!isFlipped);
    }

    const showGame = remainingCount > 0;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            transitionDuration={420}
            PaperComponent={({ children }) => (
                <div
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
                <Button onClick={handleClose}>
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
                            <button className="flashcard-buttons__correct-btn" onClick={handleCorrect}>
                                <GiCheckMark className="flashcard-buttons__icon" />
                                Correct!
                            </button>
                            <button className="flashcard-buttons__incorrect-btn" onClick={handleIncorrect}>
                                <PiRepeatBold className="flashcard-buttons__icon" />
                                Try again
                            </button>
                        </div> 
                        : 
                        <button
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
                        <button className="game-modal__play-btn" onClick={handlePlayAgain}>
                            Play Again
                        </button>
                    </div>
                )}
                </DialogContent>
        </Dialog>
    );
}