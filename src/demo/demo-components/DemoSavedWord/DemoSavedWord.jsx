import "./DemoSavedWord.css";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { PiTrashLight } from "react-icons/pi";
import DemoEditWordModal from "../DemoEditWordModal/DemoEditWordModal";
import { FaBedPulse } from "react-icons/fa6";

export default function DemoSavedWord({
  word,
  updateMeaning,
  isEditingWord,
  setIsEditingWord,
  deleteWord,
}) {
  const [formData, setFormData] = useState({
    meaning: word.meaning,
  });

  //NEW CODE ----------------------
  //state that will keep track of IF the edit menu is open for that particular word. Also, isMouseInsideMenu is utilized in order to track whether the cursor is inside of the menu. The menu is set to close when your mouse is outside of the menu.
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [isMouseInsideMenu, setIsMouseInsideMenu] = useState(false);
  const [showingEditWordModal, setShowingEditWordModal] = useState(FaBedPulse);

  function handleOpenEditModal() {
    setShowingEditWordModal(true);
  }

  //clicking the edit icon will open up the menu or close the menu if the menu is already open
  function handleEditIconClick() {
    setIsEditMenuOpen((currentState) => !currentState);
  }

  //if the mouse leaves the saved word card element that is associated with the menu, close the menu if the menu is already open.
  function handleMouseleaveCard() {
    if (!isMouseInsideMenu) {
      setIsEditMenuOpen(false);
    }
  }

  //if the mouse enters the menu, set state of IsMouseInsideMenu to TRUE. (it allows you navigate edit or delete buttons as you need to)
  function handleMouseEnterMenu() {
    setIsMouseInsideMenu(true);
  }

  //if you enter the menu and then leave the menu with your mouse, it automatically closes the menu.
  function handleEditMenuMouseleave() {
    setIsMouseInsideMenu(false);
    setIsEditMenuOpen(false);
  }

  //I WILL REVISIT THE COMMENTED CODE BELOW WHEN I CREATE THE MODAL. I just commented it out for now so that I wouldn't get confused when I adjust things.
  /*
  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value,
    };
    setFormData(newFormData);
  } 

  function handleEditClick() {
    setIsEditingWord(word._id);
  } 

  function handleUpdateMeaning(word) {
    if (word.meaning === formData.meaning) {
      setIsEditingWord(null);
      return;
    }
    updateMeaning(word, formData.meaning);
  } */

  function handleDeleteWord() {
    setIsEditMenuOpen(false);
    deleteWord(word);
  }

  return (
    <article className="SavedWord" onMouseLeave={handleMouseleaveCard}>
      {/* This the three dots. I placed it absolutely to the corner of every saved word. */}
      <BiDotsVerticalRounded
        className="edit-menu-icon"
        onClick={handleEditIconClick}
      />
      <DemoEditWordModal
        showingEditWordModal={showingEditWordModal}
        setShowingEditWordModal={setShowingEditWordModal}
        word={word}
      />
      {/* If the editMenuOpen state variable is true, display the edit/delete menu. */}
      {isEditMenuOpen && (
        <article
          className="edit-delete-menu"
          onMouseEnter={handleMouseEnterMenu}
          onMouseLeave={handleEditMenuMouseleave}
        >
          <section className="edit-button" onClick={handleOpenEditModal}>
            <p>Edit</p>
            <FaPencilAlt />
          </section>
          <section className="delete-button" onClick={handleDeleteWord}>
            <p>Delete</p>
            <PiTrashLight />
          </section>
        </article>
      )}
      <section className="char-pinyin">
        {/* {isEditingWord && (
          <div
            className="word-delete-btn"
            onClick={() => handleDeleteWord(word)}
          >
            <PiTrashLight />
          </div>
        )} */}
        <p className="pinyin"> {word.pinyin} </p>
        <p className="char zh">{word.charGroup} </p>
      </section>
      <section>
        <p className="word-meaning">{word.meaning}</p>
        {/* <div className="edit-btn" onClick={handleEditClick}>
              <FaRegEdit />
            </div> */}
      </section>
    </article>
  );
}

/* 
OLD CODE -> to keep for reference. 
return (
    <article className="SavedWord">
      <BiDotsVerticalRounded />
      <section className="char-pinyin">
         {isEditingWord && (
          <div
            className="word-delete-btn"
            onClick={() => handleDeleteWord(word)}
          >
            <PiTrashLight />
          </div>
        )} 
        <p className="pinyin"> {word.pinyin} </p>
        <p className="char zh">{word.charGroup} </p>
      </section>
      <section>
        {isEditingWord ? (
          <form
            className="updateMeaningForm"
            onSubmit={() => handleUpdateMeaning(word)}
          >
            <input
              type="text"
              name="meaning"
              value={formData.meaning}
              onChange={handleChange}
            />
            <button className="submit-btn" type="submit">
              <FaCheckSquare className="submit-icon" />
            </button>
          </form>
        ) : (
          <div>
            <div>{word.meaning}</div>
             <div className="edit-btn" onClick={handleEditClick}>
              <FaRegEdit />
            </div> 
          </div>
        )}
      </section>
    </article>
  );
}
//KEEPING OLD CODE HERE IN CASE I NEED TO REFERENCE IT.
        <p className="char zh">{word.charGroup} </p>
      </section>
      <section>
        {isEditingWord ? (
          <form
            className="updateMeaningForm"
            onSubmit={() => handleUpdateMeaning(word)}
          >
            <input
              type="text"
              name="meaning"
              value={formData.meaning}
              onChange={handleChange}
            />
            <button className="submit-btn" type="submit">
              <FaCheckSquare className="submit-icon" />
            </button>
          </form>
        ) : (
          <div>
            <div>{word.meaning}</div>
            {/* <div className="edit-btn" onClick={handleEditClick}>
              <FaRegEdit />
            </div>}
            </div>
          )}
        </section>
      </article>
*/
