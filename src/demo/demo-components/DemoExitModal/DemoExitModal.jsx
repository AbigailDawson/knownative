import "./DemoExitModal.css"
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function DemoExitModal({ showExitModal, handleCloseExit }) {

    const navigate = useNavigate()
    function exitDemo() {
        navigate('/')
    }

    return (
        <Modal
            show={showExitModal}
            onHide={handleCloseExit}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Exit and clear word list?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Exiting the demo will remove your saved words.</p>
                <p>Would you like to change your selected text instead?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseExit}>Go Back</Button>
                <Button variant="secondary">Change Text</Button>
                <Button variant="danger" onClick={exitDemo}>Exit</Button>
            </Modal.Footer>
        </Modal>
    )
}