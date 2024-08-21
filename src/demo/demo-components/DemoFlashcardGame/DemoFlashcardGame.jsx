import { useState } from "react"
import DemoFlashcard from "../../demo-components/DemoFlashcard/DemoFlashcard";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { FaRegWindowClose } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { PiRepeatBold } from "react-icons/pi";
class Deck {
        constructor(){
            this.top = null
            this.bottom = null
        }
        drawCard() {
            let card = this.top
            this.top = this.top.next
            return card
        }
        returnCard(card) {
            this.bottom.next = card
            card.previous = this.bottom
            this.bottom = card
            card.next = null
        }
        addNewCard(chinese, pinyin, english) {
            let newCard = {
                chinese: chinese,
                pinyin: pinyin,
                english: english,
                next: null,
                previous: null
            }
            if (!this.top) {
                this.top = newCard
                this.bottom = newCard
            }
            else {
                this.bottom.next = newCard
                newCard.previous = this.bottom
                this.bottom = newCard
            }
        }
    }

export default function DemoFlashcardGame(wordList) {
    const [open, setOpen] = useState(false);
    const [flashcards, setFlashcards] = useState([]);
    const [selectedFront, setSelectedFront] = useState("chinese");
    const [showPinyin, setShowPinyin] = useState(true);
    const [gameInProgress, setGameInProgress] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [remainingCount, setRemainingCount] = useState(0);

    function getFlashcards() {
        const flashcardsArray = wordList.map((word) => ({
            chinese: word.charGroup,
            pinyin: word.pinyin,
            meaning: word.meaning,
            id: word._id,
        }));
        setFlashcards(flashcardsArray);
  }

    function handleClose() {
        setFlashcards([]);
        setCorrectCount(0);
        setGameInProgress(false);
        setOpen(false);
    }

    function handleCorrect() {
        // if the user marks the word correct, create a new array of flashcards removing the 1st one in the array (the one that was correct)
        setFlashcards((prevFlashcards) => prevFlashcards.slice(1));
        setCorrectCount(correctCount + 1);
        setRemainingCount(remainingCount - 1);
    }

    function handleIncorrect() {
        // if the user marks the word incorrect, create a new array by removing the 1st card (same as when you get it correct), but instead add it back in at the end of the new array (basically cycles the cards thru)
        setFlashcards((prevFlashcards) => [
            ...prevFlashcards.slice(1),
            prevFlashcards[0],
        ]);
    }

    function startQuiz() {
        setOpen(true);
        getFlashcards();
        setRemainingCount(flashcards.length);
        console.log(flashcards.length);
        setGameInProgress(true);
    }

    function handlePlayAgain() {
        const flashcardsArray = wordList.map((word) => ({
            chinese: word.charGroup,
            pinyin: word.pinyin,
            meaning: word.meaning,
            id: word._id,
        }));
        setFlashcards(flashcardsArray);
        setGameInProgress(false);
        setOpen(true);
    }

    return (
        <>
        <button className="play-btn" onClick={startQuiz}>
          Start Quiz
        </button>
        <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={({ children }) => (
          <div
            style={{
              width: "60vmin",
              height: "50vmin",
              backgroundColor: "white",
              color: "var(--drk-txt)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1vmin",
              borderRadius: "2vmin",
            }}
          >
            {children}
          </div>
        )}
      >
        <DialogActions
          style={{
            alignSelf: "flex-end",
            padding: "0",
          }}
        >
          <Button onClick={handleClose}>
            <FaRegWindowClose className="close-icon" />
          </Button>
        </DialogActions>
        <DialogContent
          style={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {flashcards.length > 0 && gameInProgress ? (
            <>
              <DemoFlashcard
                chinese={flashcards[0].chinese}
                pinyin={flashcards[0].pinyin}
                english={flashcards[0].meaning}
                selectedFront={selectedFront}
                showPinyin={showPinyin}
                onCorrect={handleCorrect}
                onIncorrect={handleIncorrect}
                flashcards={flashcards}
              />
              <div>
                <div className="flashcard-btns">
                  <button className="correct-btn" onClick={handleCorrect}>
                    <GiCheckMark className="flashcard-icon" />
                    Correct!
                  </button>
                  <button className="incorrect-btn" onClick={handleIncorrect}>
                    <PiRepeatBold className="flashcard-icon" />
                    Try again
                  </button>
                </div>
                <div className="flashcard-count">
                  <p>
                    <span className="correct-count">{correctCount}</span>{" "}
                    Correct
                  </p>
                  <p>
                    <span className="remaining-count">{remainingCount}</span>{" "}
                    Remaining
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="congrats">
              <div>
                <dotlottie-player
                  src="https://lottie.host/9279b8f8-2d84-4077-aaf6-db967f8ec7bb/3JRYmBPJgq.json"
                  background="transparent"
                  speed="1"
                  style={{ height: "20vmin" }}
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
              <h2>You completed the deck!</h2>
              <button className="play-btn" onClick={handlePlayAgain}>
                Play Again
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
        </>
    )

}