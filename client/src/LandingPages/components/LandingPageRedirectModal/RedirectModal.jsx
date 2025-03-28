import { Link } from "react-router-dom"
import Modal from "../../../ui-components/Modal/modal"
import Button from "../../../ui-components/Button/button"

export default function RedirectModal({ login }) {
    if (login) {
        return (
            <Modal
                hasCustomButtons={true}
            >
                <h5>Login was successful!</h5>
                <p>
                    Please wait a moment as we redirect you to<br />
                    the dashboard.
                </p>
                <Link to="/dashboard">
                    <Button
                        buttonVariant={"primary"}
                        buttonText={"Continue to Dashboard"}
                    />
                </Link>
            </Modal>
        )
    } else {
        return (
            <Modal
                hasCustomButtons={true}
            >
                <h5>Your account has been created!</h5>
                <p>
                    A confirmation email has been sent to your inbox.<br />
                    Please check your email and click with verification<br />
                    link to complete your registration.
                </p>
                <Link to="/dashboard">
                    <Button
                        buttonVariant={"primary"}
                        buttonText={"Continue to Dashboard"}
                    />
                </Link>
            </Modal>
        )
    }
}