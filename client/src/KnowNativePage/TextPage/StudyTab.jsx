import { useEffect, useState } from "react";
import { getTextTokens } from "../../utilities/texts-api.js";
import { useSavedWordsContext } from "../../contexts/SavedWords/SavedWordsProvider";
import "./StudyTab.scss";
import Word from "./components/Word/Word.jsx";
import WordPopup from "./components/WordPopup/WordPopup";
import Spinner from "../../ui-components/Spinner/spinner.jsx";

export default function StudyTab({ text, tokenCacheRef }) {
  const [tokens, setTokens] = useState([]);
  const [activeWord, setActiveWord] = useState(null);
  const [detectedLanguage, setDetectedLanguage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { savedWords } = useSavedWordsContext();

  function handleWordClick(token, index, e) {
    const { pronunciation = "", definition = "", _id } = token;
    setActiveWord({
      index: index,
      chars: token.text,
      pinyin: pronunciation,
      meaning: definition,
      textId: text._id,
      tokenId: _id,
      rect: e.target.getBoundingClientRect(), // store click position for popup placement
    });
  }

  // Helper function to check if a word is saved
  function isWordSaved(tokenId, chars) {
    return savedWords.some(
      (savedWord) =>
        savedWord.frontProperties.traditional === chars &&
        savedWord.tokenId === tokenId
    );
  }

  function cacheTokens(textId, tokens, detectedLanguage) {
    if (!textId || !tokens) return;

    tokenCacheRef.current = {
      cachedTextId: textId,
      cachedTokens: tokens,
      cachedDetectedLanguage: detectedLanguage,
    };
  }

  async function fetchTokens() {
    
    if (!text?.content) return;

    // Check if the token cache exists.
    if (tokenCacheRef.current) {
      
      const { cachedTextId, cachedTokens, cachedDetectedLanguage } = tokenCacheRef.current;
      
      // IF the current text's ._id matches the cachedtextID, 
      // use the cached tokens and detected language to set state.
      if (cachedTextId === text._id) {
        setTokens(cachedTokens.map((token) => ({ text: token.word, ...token })));
        setDetectedLanguage(cachedDetectedLanguage);
        setIsLoading(false);
        return;
      }
    }

    // IF tokens for this text are not cached:
    // Fetch the tokens and detected language from the database.
    // Cache the response.
    setIsLoading(true);
    try {
      const { tokens, detectedLanguage } = await getTextTokens(text._id);
      setDetectedLanguage(detectedLanguage);
      setTokens(
        tokens.map((token) => ( { text: token.word, ...token } ))
      );
      cacheTokens(text._id, tokens, detectedLanguage);
    } catch (err) {
      setTokens([{ text: text.content }]); // fallback to displaying the full text if fetching fails.
      setDetectedLanguage('');
    } finally {
      setIsLoading(false);
    }
  }  

  useEffect(() => {
    fetchTokens();
  }, [text, tokenCacheRef]);

  return (
    <section className="study">
      <div className="study__language">
        <h5><strong>Language: </strong> { detectedLanguage || 'Loading...'}</h5> 
      </div>
      <div className="study__body">
        {isLoading ? 
            <Spinner />
          :
            <Word 
            tokens={tokens} 
            handleWordClick={handleWordClick}
            isWordSaved={isWordSaved}
            />
        }
      </div>

      {/* show popup if a word was clicked */}
      {activeWord && (
        <WordPopup
          word={activeWord}
          anchorRect={activeWord.rect}
          onClose={() => setActiveWord(null)}
          isSaved={isWordSaved(activeWord.tokenId, activeWord.chars)}
        />
      )}
    </section>
  );
}