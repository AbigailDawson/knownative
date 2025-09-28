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
    const [correctCount, setCorrectCount] = useState(0);
    const [remainingCount, setRemainingCount] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const w = Array.isArray(savedWords) && savedWords.length ? savedWords[0] : null;

    const chinese =
        w?.frontProperties?.traditional ??
        w?.charGroup ??
        w?.traditional ??
        '';

    const pinyin =
        w?.frontProperties?.pinyin ??
        w?.pinyin ??
        '';

    const english =
        w?.backProperties?.meaning ??
        w?.meaning ??
        '';

    function handleClose() {
        setIsFlipped(false);
        setCorrectCount(0);
        onClose();
    }
    
    function handleCorrect() {
        // If the user marks the card as correct, update the count.
        setCorrectCount((prev) => prev + 1);
        setIsFlipped(false);
    }

    function handleIncorrect() {
        // If the user marks the card as incorrect, flip the card back.
        setIsFlipped(false);
    }

    // Blur the background text when the FlashcardGameModal is open
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
                        onToggle={() => setIsFlipped(v => !v)}
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
                            onClick={() => setIsFlipped(v => !v)}
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