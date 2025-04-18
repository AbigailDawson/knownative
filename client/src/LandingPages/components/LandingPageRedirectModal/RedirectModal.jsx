import { Link } from "react-router-dom"
import Modal from "../../../ui-components/Modal/modal"
import Button from "../../../ui-components/Button/button"
import { useAuthContext } from "../../../contexts/Auth/AuthProvider"

export default function RedirectModal({ login, firstName = undefined }) {
    const { user } = useAuthContext();

    if (login) {
        return (
            <Modal
                hasCustomButtons={true}
            >
                <h5>Login was successful!</h5>
                <p>
                    Welcome back, {user.firstName}!
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