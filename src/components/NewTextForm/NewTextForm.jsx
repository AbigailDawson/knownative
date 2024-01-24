import { useState } from 'react'

export default function NewTextForm({ handleAddText }) {

  const [textData, setTextData] = useState({
    title: '',
    source: '',
    content: ''
  })

  function handleChange(evt) {
    const newTextData = {
      ...textData,
      [evt.target.name]: evt.target.value
    }
    setTextData(newTextData)
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    handleAddText(textData)
  }

  return (
    <div className="form-container">
      <form className="NewTextForm" onSubmit={handleSubmit}>
        <label for="title">Title</label>
        <input name="title" type="text" onChange={handleChange} value={textData.title}/>
        <label for="source">Source</label>
        <input name="source" type="text" onChange={handleChange} value={textData.source}/>
        <label for="content">Content</label>
        <input name="content" type="text" onChange={handleChange} value={textData.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}