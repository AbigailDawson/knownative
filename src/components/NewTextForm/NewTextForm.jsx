import { useState } from 'react'
import * as textAPI from '../../utilities/text-api'

export default function NewTextForm() {

  const [formData, setFormData] = useState({
    title: '',
    source: '',
    content: ''
  })

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value
    }
    setFormData(newFormData)
  }

  async function handleNewText(evt) {
    evt.preventDefault()
    try {
      const newText = await textAPI.addNewText(formData)
      console.log('newText at handleNewText: ', newText)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form-container">
      <form className="NewTextForm" onSubmit={handleNewText}>
        <label for="title">Title</label>
        <input name="title" type="text" onChange={handleChange} value={formData.title}/>
        <label for="source">Source</label>
        <input name="source" type="text" onChange={handleChange} value={formData.source}/>
        <label for="content">Content</label>
        <input name="content" type="text" onChange={handleChange} value={formData.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}