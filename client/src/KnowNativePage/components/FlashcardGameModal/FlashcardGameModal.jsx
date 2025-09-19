import { useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { useSavedWordsContext } from '../../../contexts/SavedWords/SavedWordsProvider';
import './FlashcardGameModal.scss';

export default function FlashcardGameModal({ selectedFront = 'chinese', showPinyin = true, open, onClose, blurText }) {
    
    const { savedWords } = useSavedWordsContext();

    function handleClose() {
        onClose();
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
                <div style={{ textAlign: 'center' }}>
                    <h2>Flashcards Placeholder</h2>
                    <p>Saved Words: {savedWords ? savedWords.length : 0}</p>
                    <p>Selected Front: {selectedFront}</p>
                    <p>Show Pinyin: {showPinyin ? 'Yes' : 'No'}</p>
                    <p style={{ marginTop: '20px', color: '#666' }}>
                        Flashcard.jsx component will be implemented here.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}