import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const Modal = ({ canCloseOnEscapeKey, children, hasCloseBtn, modalTitle, setShowModal }) => {
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
      <div className="reusable-modal-header-contents">
        <h1>{modalTitle}</h1>
        {hasCloseBtn ? <button onClick={() => setShowModal(false)}>Close</button> : null}
      </div>
      {children}
    </div>,
    elRef.current
  );
};

export default Modal;
