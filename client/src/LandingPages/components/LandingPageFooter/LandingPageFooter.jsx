import './LandingPageFooter.scss';

export default function LandingPageFooter({ showLinks = false }) {
  const year = new Date().getFullYear();

  return (
    <div className="container footer">
      <footer className="py-3 my-4">
          <hr className="footer-divider" />
        <p className="text-center text-body-secondary">© {year} KnowNative</p>
      </footer>
    </div>
  );
}