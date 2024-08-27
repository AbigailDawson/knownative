import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./DemoLibrary.css";

function DemoLibrary({ handleBackArrowClick }) {
    return (
        <main className="DemoLibrary">
            <header className="demo-library-header-container">
                <h3 className="demo-library-sidebar-heading">Library</h3>
                <ChevronLeftIcon
                    fontSize="large"
                    data-tooltip-id="library-tooltip"
                    onClick={handleBackArrowClick}
                    className="demo-library-arrowBack"
                    color="#006769"
                />
            </header>
            <section className="demo-library-subtext">
                <p>Choose a different text to use this demo.</p>
                <p>
                    In the full version of KnowNative, you can import any text
                    you want.
                </p>
            </section>
            <section className="demo-library-currently-reading-container">
                <h5>Currently Reading:</h5>
                {/* Text cards to be implemented here */}
            </section>
            <section className="demo-library-bookshelf-container">
                <h5>Bookshelf:</h5>
                {/* Text cards to be implemented here */}
            </section>
        </main>
    );
}
export default DemoLibrary;
