import { Link } from 'react-router-dom';
import './LandingPageNav.css';

export default function LandingPageNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mx-4 py-3">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="/">
          <img src="/images/horizontal-logo.png" alt="logo" className="horizontal-logo" />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contribute">
                Contribute
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/AbigailDawson/knownative"
                target="_blank"
                rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
