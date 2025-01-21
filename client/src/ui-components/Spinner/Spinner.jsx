import './spinner.scss';

function Spinner({ text }) {
  return (
    <main>
      <article className="reusable-spinner"></article>
      {text ? <p>{text}</p> : ''}
    </main>
  );
}

export default Spinner;
