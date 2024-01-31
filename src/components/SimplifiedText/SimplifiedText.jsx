export default function SimplifiedText({ simplifiedText, saveSimplifiedText }) {
  
  function handleSave() {
    saveSimplifiedText(simplifiedText)
  }

  return (
    <>
      <p className="simplified-text zh">{simplifiedText}</p>
      <button className="save-btn" onClick={handleSave}>Save</button>
    </>
  )
}