import { useState, useEffect } from 'react';
import Modal from '../../../../ui-components/Modal/modal';
import './EditWordModal.scss';

export default function EditWordModal({ word, isOpen, onClose, onSave, onDelete }) {
  const [reading, setReading] = useState('');
  const [meaning, setMeaning] = useState('');
  const [saveError, setSaveError] = useState('');

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleOpenConfirm = () => setShowConfirm(true);
  const handleCancelConfirm = () => setShowConfirm(false);

  useEffect(() => {
    setReading(word?.frontProperties?.pinyin || '');
    setMeaning(word?.backProperties?.meaning || '');
  }, [word]);

  const handleSave = async () => {
    setSaveError('');
    try {
      await onSave(word._id, {
        frontProperties: { pinyin: reading },
        backProperties: { meaning: meaning }
      });
      onClose();
    } catch (error) {
      console.error('Save failed:', error);
      setSaveError('Error: Failed to save changes. Please try again.');
    }
  };

  const handleConfirmDelete = async () => {
    if (!word?._id) return;
    setDeleting(true);
    try {
      await onDelete(word._id);
      onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setDeleting(false);
      setShowConfirm(false);
    }
  };

  if (!isOpen || !word) return null;

  return (
    <>
      <Modal
        canCloseOnEscapeKey={true}
        buttonDeleteText="Delete"
        buttonPrimaryText="Save"
        buttonSecondaryText="Cancel"
        handleDeleteButtonOnClick={handleOpenConfirm}
        handleSecondaryButtonOnClick={onClose}
        handlePrimaryButtonOnClick={handleSave}
        hasCloseButton={true}
        modalTitle="Edit Card"
        setShowModal={(open) => {
          if (!open) onClose();
        }}>
        <div className="edit-word-modal__content">
          <div>Term</div>
          <textarea
            className="edit-word-modal__textarea"
            value={word?.frontProperties?.traditional ?? ''}
            disabled
          />

          <div>Reading</div>
          <textarea
            className="edit-word-modal__textarea"
            value={reading}
            onChange={(e) => setReading(e.target.value)}
          />

          <div>Meaning</div>
          <textarea
            className="edit-word-modal__textarea"
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
          />

          {saveError && (
            <div style={{ color: 'red', fontSize: '14px', marginTop: '8px' }}>{saveError}</div>
          )}
        </div>
      </Modal>
      {showConfirm && (
        <Modal
          modalTitle="Are you sure you want to delete this card?"
          setShowModal={(open) => {
            if (!open) setShowConfirm(false);
          }}
          hasCustomButtons={true}
          hasCloseButton={true}
          canCloseOnEscapeKey={true}>
          <div>Deleting this card cannot be undone.</div>
          <div
            className="reusable-modal__button-container--modal dashboard__cancel-buttons"
            style={{ marginTop: 12 }}>
            <button className="btn btn-secondary" onClick={handleCancelConfirm} disabled={deleting}>
              Cancel
            </button>
            <button className="btn btn-danger" onClick={handleConfirmDelete} disabled={deleting}>
              {deleting ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
