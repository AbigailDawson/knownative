import "./DemoSavedWord.css";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { PiTrashLight } from "react-icons/pi";

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
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [isMouseInsideMenu, setIsMouseInsideMenu] = useState(false);

  function handleEditMenuClick() {
    setIsEditMenuOpen((currentState) => !currentState);
  }

  function handleMouseleaveCard() {
    setTimeout(() => {
      if (!isMouseInsideMenu) {
        setIsEditMenuOpen(false);
      }
    }, 100);
  }

  function handleMouseEnterMenu() {
    setIsMouseInsideMenu(true);
  }

  function handleEditMenuMouseleave() {
    setIsMouseInsideMenu(false);
    setIsEditMenuOpen(false);
  }

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value,
    };
    setFormData(newFormData);
  }

  //reimplement later when I create the modal form for the edit form.
  // function handleEditClick() {
  //   setIsEditingWord(word._id);
  // }

  function handleUpdateMeaning(word) {
    if (word.meaning === formData.meaning) {
      setIsEditingWord(null);
      return;
    }
    updateMeaning(word, formData.meaning);
  }

  function handleDeleteWord(word) {
    setIsEditMenuOpen(false);
    deleteWord(word);
  }

  return (
    <article className="SavedWord" onMouseLeave={handleMouseleaveCard}>
      <BiDotsVerticalRounded
        className="edit-menu-button"
        onClick={handleEditMenuClick}
      />
      {isEditMenuOpen && (
        <article
          className="edit-delete-menu"
          onMouseEnter={handleMouseEnterMenu}
          onMouseLeave={handleEditMenuMouseleave}
        >
          <section className="edit-button">
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
            </div> */}
          </div>
        )}
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
*/
