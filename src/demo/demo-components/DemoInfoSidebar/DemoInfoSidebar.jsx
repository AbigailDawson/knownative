import "./DemoInfoSidebar.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

export default function DemoInfoSidebar({
    handleShowExit,
    handleBackArrowClick,
}) {
    return (
        <div className="info-section">
            <header className="demo-info-header-container">
                <h3 className="sidebar-heading">Info</h3>
                <ChevronLeftIcon
                    fontSize="large"
                    data-tooltip-id="info-tooltip"
                    onClick={handleBackArrowClick}
                    className="arrowBack"
                    color="#006769"
                />
            </header>
            <div className="info-section-subtext">
                <p>Thank you for trying the KnowNative demo!</p>
                <p>
                    KnowNative is currently in development. Check out the links
                    below to learn more or get in touch.
                </p>
            </div>

            <button className="demo-info-dark-btn" onClick={null}>
                Join our mailing list
            </button>
            <Link className="demo-info-light-btn" onClick={null} to="/contact">
                Contact us
            </Link>
            <button
                className="demo-info-light-btn"
                onClick={() =>
                    window.open(
                        "https://github.com/AbigailDawson/knownative",
                        "_blank"
                    )
                }>
                Visit GitHub
            </button>
            <button className="demo-info-light-btn" onClick={handleShowExit}>
                Return to homepage
            </button>
        </div>
    );
}
