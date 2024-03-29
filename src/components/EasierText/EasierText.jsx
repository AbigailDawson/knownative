export default function EasierText({ easierText, saveEasierText }) {
  
  function handleSave() {
    saveEasierText(easierText)
  }

  return (
    <>
      <p className="easier-text zh">{easierText}</p>
      <p className="disclaimer">Disclaimer: This text is generated using artificial intelligence. While the model strives to produce accurate and coherent content, it may occasionally contain inaccuracies, grammatical errors, or unintended meaning. The AI model does not guarantee perfection, and the user is encouraged to exercise their judgment when interpreting the output.</p>
      <button className="save-btn" onClick={handleSave}>Save</button>
    </>
  )
}