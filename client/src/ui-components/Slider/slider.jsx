import React, { useState } from 'react';
import './slider.scss';
import DemoEditWordModal from '../../DemoPage/components/DemoEditWordModal/DemoEditWordModal';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const Slider = ({ isOpen, onClose, onSuccess }) => {
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [isMouseInsideMenu, setIsMouseInsideMenu] = useState(false);
  const [showingEditWordModal, setShowingEditWordModal] = useState(false);

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

  function handleDeleteWord() {
    setIsEditMenuOpen(false);
    deleteWord(word);
  }

  return (
    <div className={`slider ${isOpen ? 'open' : ''}`}>
      <div className="slider__content">
        <button className="slider__close" aria-label="Close slider" onClick={onClose}>
          ×
        </button>
        <div className="slider__header">
          <h1 className="slider__title">Saved Cards</h1>
        </div>
        <div className="slider__body">
          <p className="slider__description">
            Expand your vocabulary with the words you’ve saved. Reviewing them regularly helps
            reinforce learning!
          </p>
          {/* Placeholder cards */}
          <div className="slider__card">
            <div className="col">
              <h3>Placeholder Term</h3>
              <p>This is an example definition...</p>
            </div>
            <div className="col">
              <BiDotsVerticalRounded
                className={`SavedWord-card__card-icon ${showingEditWordModal && 'SavedWord-card__menu-icon--open'}`}
                onClick={handleEditIconClick}
              />
              {/* Code that allows for the edit word modal to show up*/}
              {showingEditWordModal ? (
                <DemoEditWordModal
                  handleDeleteWord={handleDeleteWord}
                  setShowModal={setShowingEditWordModal}
                  updateWord={updateWord}
                  word={word}
                />
              ) : null}
              {/* If the editMenuOpen state variable is true, display the edit/delete menu. */}
              {isEditMenuOpen && (
                <article
                  className="SavedWord-card__menu"
                  onMouseEnter={handleMouseEnterMenu}
                  onMouseLeave={handleEditMenuMouseleave}>
                  <section
                    className="SavedWord-card__menu-button SavedWord-card__menu-button--edit"
                    onClick={handleOpenEditModal}>
                    <p className="SavedWord-card__menu-label">Edit</p>
                    <FaPencilAlt />
                  </section>
                  <section
                    className="SavedWord-card__menu-button 
          SavedWord-card__menu-button--delete"
                    onClick={handleDeleteWord}>
                    <p className="SavedWord-card__menu-label">Delete</p>
                    <FaTrashAlt />
                  </section>
                </article>
              )}
            </div>
          </div>
          <div className="slider__card">
            <div className="col">
              <h3>Placeholder Term</h3>
              <p>This is an example definition...</p>
            </div>
            <div className="col">
              <BiDotsVerticalRounded
                className={`SavedWord-card__card-icon ${showingEditWordModal && 'SavedWord-card__menu-icon--open'}`}
                onClick={handleEditIconClick}
              />
              {/* Code that allows for the edit word modal to show up*/}
              {showingEditWordModal ? (
                <DemoEditWordModal
                  handleDeleteWord={handleDeleteWord}
                  setShowModal={setShowingEditWordModal}
                  updateWord={updateWord}
                  word={word}
                />
              ) : null}
              {/* If the editMenuOpen state variable is true, display the edit/delete menu. */}
              {isEditMenuOpen && (
                <article
                  className="SavedWord-card__menu"
                  onMouseEnter={handleMouseEnterMenu}
                  onMouseLeave={handleEditMenuMouseleave}>
                  <section
                    className="SavedWord-card__menu-button SavedWord-card__menu-button--edit"
                    onClick={handleOpenEditModal}>
                    <p className="SavedWord-card__menu-label">Edit</p>
                    <FaPencilAlt />
                  </section>
                  <section
                    className="SavedWord-card__menu-button 
          SavedWord-card__menu-button--delete"
                    onClick={handleDeleteWord}>
                    <p className="SavedWord-card__menu-label">Delete</p>
                    <FaTrashAlt />
                  </section>
                </article>
              )}
            </div>
          </div>
        </div>
        <div className="slider__footer">
          <button className="slider__confirm" onClick={onSuccess}>
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
