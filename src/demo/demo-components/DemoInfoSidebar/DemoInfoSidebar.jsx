import "./DemoInfoSidebar.css"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

export default function DemoInfoSidebar({
    handleShowExit,
    handleBackArrowClick,
}) {

    return (
        <div className="info-section">
            <header className="demo-info-header-container">
                <h1 className="sidebar-heading">Info</h1>
                <ChevronLeftIcon
                    fontSize="large"
                    data-tooltip-id="info-tooltip"
                    onClick={handleBackArrowClick}
                    className="arrowBack"
                    color="#006769"
                />
            </header>
            <br />
            <p className="demo-info-paragraph">Thank you for trying the KnowNative demo!</p>
            <p className="demo-info-paragraph">KnowNative is currently in development. Check out the links below to learn more or get in touch.</p>
            <button
                className="demo-info-dark-btn"
                onClick={null}>
                Join our mailing list
            </button>
            <button
                className="demo-info-light-btn"
                onClick={null}>
                Contact us
            </button>
            <a
                className="demo-info-light-btn"
                href="https://github.com/AbigailDawson/knownative"
                target="_blank">
                Visit GitHub
            </a>
            <button
                className="demo-info-light-btn"
                onClick={handleShowExit}>
                Return to homepage
            </button>
        </div>
    )
}