export default function GPTText({ simplifiedText }) {
  return (
    <>
      <p className="simplified-text zh">{simplifiedText}</p>
      <button className="save-btn">Save</button>
    </>
  )
}