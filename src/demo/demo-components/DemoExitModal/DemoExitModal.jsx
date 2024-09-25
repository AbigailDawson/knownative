import './DemoExitModal.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../ui-components/Modal/modal';

export default function DemoExitModal({ setShowModal }) {
  const navigate = useNavigate();
  function exitDemo() {
    setShowModal(false);
    navigate('/');
  }

  return (
    <Modal
      canCloseOnEscapeKey={true}
      buttonPrimaryText="Exit"
      buttonSecondaryText="Go Back"
      handleSecondaryButtonOnClick={() => setShowModal(false)}
      handlePrimaryButtonOnClick={exitDemo}
      hasCloseButton={true}
      modalTitle={'Exit and clear word list?'}
      setShowModal={setShowModal}>
      <div className="exit-demo-modal-content">
        <p>Exiting the demo will remove your saved words. Are you sure you want to proceed?</p>
      </div>
    </Modal>
  );
}
