import React, { useEffect, useRef, useState, useContext } from 'react';
import './slider.scss';
import DemoEditWordModal from '../../DemoPage/components/DemoEditWordModal/DemoEditWordModal';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Button from '../Button/button';
import {
  useSavedWordsContext,
  useSavedWordsDispatch
} from '../../contexts/SavedWords/SavedWordsProvider';
import { deleteSavedWord } from '../../contexts/SavedWords/SavedWordsActionsUtil';

const Slider = ({ isOpen, onClose, onSuccess }) => {
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [isMouseInsideMenu, setIsMouseInsideMenu] = useState(false);
  const [showingEditWordModal, setShowingEditWordModal] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const [modalCardId, setModalCardId] = useState(null);
  const sliderRef = useRef();
  const { savedWords } = useSavedWordsContext();
  const dispatch = useSavedWordsDispatch();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    function handleClickOutside(event) {
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

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

  async function handleDeleteWord(wordId) {
    setIsEditMenuOpen(false);
    try {
      await deleteSavedWord(dispatch, wordId);
      onClose?.();
    } catch (e) {
      console.error('Error deleting word:', e);
    }
  }

  const displayWords = savedWords.map((word) => (
    <div key={word._id} className="slider__card">
      <div className="col">
        <section className="SavedWord-card__content">
          <p className="SavedWord-card__char">{word.frontProperties.traditional}</p>
          <p className="SavedWord-card__char">{word.backProperties.meaning}</p>
        </section>
      </div>
      <div className="col">
        <BiDotsVerticalRounded
          className={`SavedWord-card__card-icon ${modalCardId === word._id ? 'SavedWord-card__menu-icon--open' : ''}`}
          onClick={() => setActiveCardId(activeCardId === word._id ? null : word._id)}
        />

        {/* Modal */}
        {modalCardId === word._id && (
          <DemoEditWordModal
            handleDeleteWord={() => handleDeleteWord(word._id)}
            setShowModal={(open) => setModalCardId(open ? word._id : null)}
            updateWord={updateWord}
            word={word}
          />
        )}

        {/* Menu */}
        {activeCardId === word._id && (
          <article
            className="SavedWord-card__menu"
            onMouseEnter={handleMouseEnterMenu}
            onMouseLeave={() => setActiveCardId(null)}>
            <section
              className="SavedWord-card__menu-button SavedWord-card__menu-button--edit"
              onClick={() => setModalCardId(word._id)}>
              <p className="SavedWord-card__menu-label">Edit</p>
              <FaPencilAlt />
            </section>
            <section
              className="SavedWord-card__menu-button SavedWord-card__menu-button--delete"
              onClick={() => handleDeleteWord(word._id)}>
              <p className="SavedWord-card__menu-label">Delete</p>
              <FaTrashAlt />
            </section>
          </article>
        )}
      </div>
    </div>
  ));

  return (
    <div ref={sliderRef} className={`slider ${isOpen ? 'open' : ''}`}>
      <div className="slider__content">
        <button className="slider__close" aria-label="Close slider" onClick={onClose}>
          ×
        </button>
        <div className="slider__header">
          <h4 className="slider__title">Saved Cards</h4>
          <p className="slider__description">
            Expand your vocabulary with the words you’ve saved. Reviewing them regularly helps
            reinforce learning!
          </p>
        </div>
        <div className="slider__body">
          {/* Placeholder cards */}
          {displayWords.length > 0 ? (
            displayWords
          ) : (
            <div className="slider__empty-state">
              <p>No saved words yet. Start saving words to review them here!</p>
            </div>
          )}
        </div>
        <div className="slider__footer">
          <div className="dashboard__card-button">
            <Button
              iconName="&#xe41d;"
              iconStyling="reusable-button__icon-flip"
              buttonVariant="tertiary"
              buttonText="Review"
              buttonOnClickFunc={() => console.log('click click')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
