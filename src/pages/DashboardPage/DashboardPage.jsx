import { useState, useEffect } from 'react'
import './DashboardPage.css'
import * as textsAPI from '../../utilities/texts-api'
import NewTextForm from '../../components/NewTextForm/NewTextForm'
import TextListItem from '../../components/TextListItem/TextListItem'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DashboardPage() {
  const [texts, setTexts] = useState([])
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  async function handleAddText(textData) {
    const text = await textsAPI.addNewText(textData)
    setTexts([...texts, text])
    handleClose()
  }

  async function deleteText(textToDelete, id) {
    setTexts(prevTexts => 
      prevTexts.filter(text => text._id !== textToDelete._id))

    try {
      await textsAPI.deleteText(textToDelete, id)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(function() {
    async function getTexts() {
      const texts = await textsAPI.getAll()
      setTexts(texts)
    }
    getTexts()
  }, [])

  const TextListItems = texts.map(text => (
    <TextListItem
    key={text._id}
    text={text}
    id={text._id}
    title={text.title}
    source={text.source}
    content={text.content}
    deleteText={deleteText}
    />
  ))

  return (
  <main className="DashboardPage page">
    <aside className="sidebar">
      <h1>Sidebar</h1>
      <p>Sidebar content</p>
    </aside>
    {/* <NewTextForm handleAddText={handleAddText} /> */}

    <section className="main-area">
      <div className="main-area-header">
        <h1>My Texts</h1>
        <button onClick={handleOpen}>+ New</button>

        <Dialog
          open={open}
          onClose={handleClose}      
        >
        <DialogTitle>Add New Text</DialogTitle>
        <DialogContent>
          <NewTextForm handleAddText={handleAddText} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      </div>
      <div className="TextListItems">{TextListItems}</div>
    </section>
  </main>
  )
}