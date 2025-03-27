import './vocab.scss';

const Vocab = ({ pinyin, charGroup, meaning }) => {
  return (
    <div className="Vocab-card">
      <section className="Vocab-card__char">
        <p className="Vocab-card__char--pinyin">{pinyin}</p>
        <p className="Vocab-card__char--char">{charGroup}</p>
      </section>
      <section>
        <p className="Vocab-card__char--meaning">{meaning}</p>
      </section>
    </div>
  );
};

export default Vocab;
