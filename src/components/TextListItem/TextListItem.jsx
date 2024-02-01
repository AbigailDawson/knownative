import { Link } from 'react-router-dom'
import { useState } from 'react'
import './TextListItem.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { PiStarLight } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";
import { PiTrashLight } from "react-icons/pi";

export default function TextListItem({ text, title, source, content, id, favorite, archived, archiveText, deleteText, favoriteText, activeTab, getText }) {

  const truncatedContent = content.slice(0, 50)
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleArchiveText(text, id) {
    archiveText(text, id)
  }

  function handleDeleteText(text, id) {
    deleteText(text, id)
  }

  function handleStarClick(text, id) {
    favoriteText(text, id)
  }

  return (
    <div className="TextListItem">
      <div className="left-side">

        <PiTrashLight className="txt-delete-btn" onClick={handleOpen} />

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">
            {'Are you sure you want to delete this text?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Deleting this text will also delete all of its saved words. If you'd like to continue using your saved words, consider <b>archiving</b> instead.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleArchiveText(text, id)}>Archive</Button>
            <Button onClick={() => handleDeleteText(text, id)} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        <Link to={`/read/${id}`} className="item-content">
          <h3 className="zh">{title}</h3>
          <p className="zh">{truncatedContent} ... </p>
        </Link>

      </div>
      <div>
          { !favorite && !archived && <PiStarLight className="star-icon-empty" onClick={() => handleStarClick(text, id)}/> }
          { favorite && activeTab === 'all' && <PiStarFill className="star-icon-filled" onClick={() => handleStarClick(text, id)} /> }
          { favorite && activeTab === 'favorites' && <button className="remove-favorite" onClick={() => handleStarClick(text, id)}>Remove from favorites</button> }
          { archived && <button className="remove-archived" onClick={() => handleArchiveText(text, id)}>Remove from archives</button> }
      </div>
    </div>
  )
}