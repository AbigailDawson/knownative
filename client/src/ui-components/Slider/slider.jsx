import React, { useEffect, useRef, useState } from 'react';
import './slider.scss';
import EditWordModal from '../../KnowNativePage/TextPage/components/EditWordModal/EditWordModal';
import FlashcardGameModal from '../../KnowNativePage/components/FlashcardGameModal/FlashcardGameModal';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Button from '../Button/button';
import {
  useSavedWordsContext,
  useSavedWordsDispatch
} from '../../contexts/SavedWords/SavedWordsProvider';
import { deleteCard, updateCard } from '../../utilities/cards-api';
import { actionDeleteWord } from '../../contexts/SavedWords/SavedWordsActions';

const Slider = ({ isOpen, onClose, blurText }) => {
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [isMouseInsideMenu, setIsMouseInsideMenu] = useState(false);
  const [showingEditWordModal, setShowingEditWordModal] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const sliderRef = useRef();
  const { savedWords } = useSavedWordsContext();
  const dispatch = useSavedWordsDispatch();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [flashcardGameModalOpen, setFlashcardGameModalOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (editModalOpen) return;
      if (event.key === 'Escape') { 
        onClose();
      }
    }

    function handleClickOutside(event) {
      if (editModalOpen) return;
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
  }, [isOpen, onClose, editModalOpen]);

  function handleOpenFlashcardGameModal() {
    onClose();
    setFlashcardGameModalOpen(true);
  }

  function handleCloseFlashcardGameModal() {
    setFlashcardGameModalOpen(false);
  }

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

  const handleEditClick = (word) => {
    setSelectedWord(word);
    setEditModalOpen(true);
    setActiveCardId(null);
  };

  const handleSaveWord = async (cardId, updates) => {
    setErrorMessage('');
    try {
      await updateCard(cardId, updates);
      dispatch({
        type: 'UPDATE',
        data: { cardId, updates }
      });
    } catch (error) {
      console.error('Failed to save changes:', error);
      setErrorMessage('Changes could not be saved. Please try again.');
    }
  };
  const handleDeleteWord = async (cardId) => {
    setErrorMessage('');
    try {
      await deleteCard(cardId);
      dispatch(actionDeleteWord(cardId));
      setShowingEditWordModal(false);
    } catch (error) {
      console.error('Failed to save changes:', error);
      setErrorMessage('Changes could not be saved. Please try again.');
    }
  };

  const handleDeleteCard = async (cardId) => {
    setIsEditMenuOpen(false);
    try {
      await deleteCard(cardId);
      dispatch(actionDeleteWord(cardId));
      onClose();
    } catch (e) {
      console.error('Error deleting card:', e);
    }
  };

  const displayWords = savedWords.map((word) => (
    <div key={word._id} className="slider__card">
      <section className="slider__card-content" aria-label='Saved Word'>
        <p className="slider__card-content--savedWord">{word.frontProperties.traditional}</p>
        <p className="slider__card-content--meaning">{word.backProperties.meaning}</p>
      </section>
      <div className="slider__card--options" aria-label='Options Menu'>
        <BiDotsVerticalRounded
          className={`options-menu__icon ${activeCardId === word._id ? 'options-menu__icon--open' : ''}`}
          onClick={() => setActiveCardId(activeCardId === word._id ? null : word._id)}
        />
        {/* Menu */}
        {activeCardId === word._id && (
          <article
            className="options-menu"
            onMouseEnter={handleMouseEnterMenu}
            onMouseLeave={() => setActiveCardId(null)}>
            <section
              className="options-menu-button options-menu-button--edit"
              onClick={() => handleEditClick(word)}>
              <p className="options-menu-label">Edit</p>
              <FaPencilAlt />
            </section>
            <section
              className="options-menu-button options-menu-button--delete"
              onClick={() => handleDeleteCard(word._id)}>
              <p className="options-menu-label">Delete</p>
              <FaTrashAlt />
            </section>
          </article>
        )}
      </div>
    </div>
  ));

  return (
    <>
      <div ref={sliderRef} className={`slider ${isOpen ? 'slider--open' : ''}`}>
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
            {errorMessage && (
              <div style={{ color: 'red', padding: '8px', fontSize: '14px', textAlign: 'center' }}>
                {errorMessage}
              </div>
            )}

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
            {Array.isArray(savedWords) && savedWords.length > 0 && (
              <div className="slider__footer-button">
                <Button
                  iconName="&#xe41d;"
                  iconStyling="reusable-button__icon-flip"
                  buttonVariant="tertiary"
                  buttonText="Review"
                  buttonOnClickFunc={handleOpenFlashcardGameModal}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <EditWordModal
        word={selectedWord}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveWord}
        onDelete={handleDeleteWord}
      />
      <FlashcardGameModal
        open={flashcardGameModalOpen}
        onClose={handleCloseFlashcardGameModal}
        blurText={blurText}
      />
    </>
  );
};

export default Slider;
