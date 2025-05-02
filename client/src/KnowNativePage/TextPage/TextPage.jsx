import './TextPage.scss';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function TextPage() {
  const { id } = useParams();
  const [textData, setTextData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchText = async () => {
      console.log("Fetching text with ID:", id);
      try {
        const res = await fetch(`/api/texts/${id}`);
        const data = await res.json();
        console.log("Text fetched:", data);

        if (!res.ok || !data || (Array.isArray(data) && data.length === 0)) {
          setNotFound(true);
        } else {
          setTextData(data);
        }
      } catch (err) {
        console.error("Error fetching text:", err);
        setNotFound(true);
      }
    };

    fetchText();
  }, [id]);

  if (notFound) return <p>Text not found.</p>;
  if (!textData) return <p>Loading...</p>;

  return (
    <div className="text-page">
      <Link to="/dashboard" className="text-page__back">← Return to Dashboard</Link>

      <h1 className="text-page__title">{textData.title}</h1>

      {textData.source && (
        <a href={textData.source} target="_blank" rel="noreferrer" className="text-page__source">
          {textData.source}
        </a>
      )}

      <div className="text-page__tabs">
        <span>Read</span>
        <span>Study</span>
        <span>Translate</span>
      </div>

      <div className="text-page__content">
        <p>{textData.content}</p>
      </div>
    </div>
  );
}
