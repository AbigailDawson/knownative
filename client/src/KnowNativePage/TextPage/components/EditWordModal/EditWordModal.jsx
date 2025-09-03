import { useState, useEffect } from 'react';
import Modal from '../../../../ui-components/Modal/modal';
import './EditWordModal.scss';

export default function EditWordModal({ word, isOpen, onClose, onSave }) {
  const [reading, setReading] = useState(word?.frontProperties?.pinyin || '');
  const [meaning, setMeaning] = useState(word?.backProperties?.meaning || '');

  useEffect(() => {
    setReading(word?.frontProperties?.pinyin || '');
    setMeaning(word?.backProperties?.meaning || '');
  }, [word]);

  const handleSave = async () => {
  try {
    await onSave(word._id, {
      frontProperties: { pinyin: reading },
      backProperties: { meaning: meaning }
    });
    onClose();
  } catch (error) {
    console.error('Save failed:', error);
  }
};

    // Delete functionality can be implemented here

  if (!isOpen || !word) return null;

  return (
    <Modal
      canCloseOnEscapeKey={true}
      buttonDeleteText="Delete" // visible, no action
      buttonPrimaryText="Save"
      buttonSecondaryText="Cancel"
      handleDeleteButtonOnClick={() => {}}
      handleSecondaryButtonOnClick={onClose}
      handlePrimaryButtonOnClick={handleSave}
      hasCloseButton={true}
      modalTitle="Edit Card"
      setShowModal={onClose}>
      
      <div className="edit-word-modal__content">
        <div>Term</div>
        <textarea 
          className="edit-word-modal__textarea" 
          value={word.frontProperties.traditional} 
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
      </div>
    </Modal>
  );
}