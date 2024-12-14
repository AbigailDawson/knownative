import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/button';
import './modal.scss';

const Modal = ({
  canCloseOnEscapeKey,
  children,
  buttonDeleteText,
  buttonPrimaryText,
  buttonSecondaryText,
  handleDeleteButtonOnClick,
  handlePrimaryButtonOnClick,
  handleSecondaryButtonOnClick,
  hasCloseButton,
  modalTitle,
  setShowModal,
  hasCustomButtons
}) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const modalRoot = document.getElementById('portal-modal');
    modalRoot.appendChild(elRef.current);
    // anything you return in a useEffect will run after the component unmounts
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (canCloseOnEscapeKey === true && e.keyCode === 27) {
        setShowModal(false);
      }
    };
    document.body.addEventListener('keydown', close);
    return () => document.body.removeEventListener('keydown', close);
  }, [canCloseOnEscapeKey, setShowModal]);

  return createPortal(
    <div className="reusable-modal">
      <div className="reusable-modal-header__contents">
        <h1 className="reusable-modal__title">{modalTitle}</h1>
        {hasCloseButton ? (
          <button className="reusable-modal__buttons--close" onClick={() => setShowModal(false)}>
            ×
          </button>
        ) : null}
      </div>
      {children}
      <div className="reusable-modal__buttons">
        {buttonDeleteText ? (
          <div className="reusable-modal__button-container">
            <Button
              buttonText={buttonDeleteText}
              buttonOnClickFunc={handleDeleteButtonOnClick}
              buttonVariant={'danger'}
            />
          </div>
        ) : null}
        {hasCustomButtons ? null : (
          <div className="reusable-modal__button-container--modal">
            <Button
              buttonText={buttonSecondaryText}
              buttonOnClickFunc={handleSecondaryButtonOnClick}
              buttonVariant={'secondary'}
            />
            <Button
              buttonText={buttonPrimaryText}
              buttonOnClickFunc={handlePrimaryButtonOnClick}
              buttonVariant={'primary'}
            />
          </div>
        )}
      </div>
    </div>,
    elRef.current
  );
};

export default Modal;
