import { Link } from 'react-router-dom';
import './LandingPageNav.scss';

export default function LandingPageNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/horizontal-logo.png" alt="logo" className="navbar__logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
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
                rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link--secondary" to="/demo">
                Try demo
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link nav-link--primary" to="/signup">
            Sign up
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}