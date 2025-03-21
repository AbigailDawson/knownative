import './LandingPageFooter.scss';
import { Link } from 'react-router-dom';

export default function LandingPageFooter() {
  return (
    <footer className="footer">
      <div className="container text-center py-4">
        <div className="footer-links mb-3">
          <a href="/features" className="footer-link mx-3">Features</a>
          <a href="/pricing" className="footer-link mx-3">Pricing</a>
          <a href="/faqs" className="footer-link mx-3">FAQs</a>
          <Link to="/about" className="footer-link mx-3">About</Link>
        </div>
        <hr className="footer-divider" />
        <p className="copyright">© 2024 KnowNative</p>
      </div>
    </footer>
  );
}