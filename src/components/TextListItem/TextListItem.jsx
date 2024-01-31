import { Link } from 'react-router-dom'
import { useState } from 'react'
import './TextListItem.css'
import { BsX } from "react-icons/bs";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function TextListItem({ text, title, source, content, id, archiveText, deleteText }) {

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

  return (
    <div className="TextListItem">
      <div className="left-side">

        <div className="delete-btn" onClick={handleOpen}><BsX /></div>

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

        <div className="item-content">
          <h3>{title}</h3>
          <p>{truncatedContent} ... </p>
        </div>

      </div>

      <Link className="read-btn" to={`/read/${id}`}>
        <button>Read</button>
      </Link>
    </div>
  )
}