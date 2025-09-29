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
    const [hasBeenFlipped, setHasBeenFlipped] = useState(false);

    // ** When the modal opens:** 
    // 1) Initialize the flashcards array with all of the savedWords.
    useEffect(() => {
    if (open && savedWords.length > 0) {
        setFlashcards([...savedWords]);
        // 2) Set the remaining count to the total number of savedWords.
        setRemainingCount(savedWords.length);
    }
    }, [open, savedWords]);

    // 3) Blur the background text
    useEffect(() => {
        if (blurText) {
            blurText(open);
        }
        // Remove blur when the FlashcardGameModal closes.
        return () => {
            if (blurText) {
                blurText(false);
            }
        };
    }, [open, blurText]);

    const word = Array.isArray(flashcards) && flashcards.length ? flashcards[0] : null;

    const chinese = word?.frontProperties.traditional
    const pinyin = word?.frontProperties.pinyin
    const english = word?.backProperties.meaning

    function handleClose() {
        setIsFlipped(false);
        setCorrectCount(0);
        onClose();
    }
    
    function handleCorrect() {
        // If the user marks the card as correct, update the count.
        setCorrectCount((count) => count + 1);
        // Remove the card marked as *Correct* from the flashcards array.
        setFlashcards((cards) => cards.slice(1));
        // Decrement the remaining cards counter.
        setRemainingCount((count) => count - 1);
        setIsFlipped(false);
        setHasBeenFlipped(false);
    }

    function handleIncorrect() {
        // Create a new array by removing the first card and adding it to the end
        setFlashcards((cards) => [...cards.slice(1), cards[0]]);
        // Reset the flip state so the user can try the next card.
        setIsFlipped(false);
        setHasBeenFlipped(false);
    }

  function handleToggle() {
        setIsFlipped(!isFlipped);
        if (!hasBeenFlipped) {
        setHasBeenFlipped(true);
        }
    }

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
                    <Flashcard
                        chinese={chinese}
                        pinyin={pinyin}
                        english={english}
                        selectedFront={selectedFront}
                        showPinyin={showPinyin}
                        isFlipped={isFlipped}
                        onToggle={handleToggle}
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
                            onClick={() => setIsFlipped(isFlipped => !isFlipped)}
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
                </DialogContent>
        </Dialog>
    );
}