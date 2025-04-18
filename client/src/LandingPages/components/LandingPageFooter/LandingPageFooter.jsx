import './LandingPageFooter.scss';

export default function LandingPageFooter({ showLinks = false }) {
  return (
    <div className="container footer">
      <footer className="py-3 my-4">
        {showLinks && (
          <div className="footer-links mb-3">
            <a href="/features" className="footer-link mx-3">Features</a>
            <a href="/pricing" className="footer-link mx-3">Pricing</a>
            <a href="/faqs" className="footer-link mx-3">FAQs</a>
            <a href="/about" className="footer-link mx-3">About</a>
          </div>
        )}
        <hr className="footer-divider" />
        <p className="text-center text-body-secondary">© 2024 KnowNative</p>
      </footer>
    </div>
  );
}