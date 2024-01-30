import './NewTextForm.css'
import { useState } from 'react'
import TextField from '@mui/material/TextField';

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
        <div>
          <TextField 
            required
            id="filled-basic" 
            label="Title" 
            variant="filled" 
            name="title" 
            type="text" 
            onChange={handleChange} 
            value={textData.title}
            sx={{ width: '100%' }}
          />
        </div>
        <div>
          <TextField 
            id="filled-helperText"
            label="Source" 
            variant="filled" 
            name="source" 
            type="text" 
            helperText="Provide a link to your source, if applicable."
            onChange={handleChange} 
            value={textData.source}
            sx={{ width: '100%' }}
          />
        </div>
        <div>
          <TextField 
            required
            multiline
            rows={12}
            id="filled-multiline-flexible"
            label="Content" 
            variant="filled" 
            name="content" 
            onChange={handleChange} 
            value={textData.content}
            sx={{ width: '100%' }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}