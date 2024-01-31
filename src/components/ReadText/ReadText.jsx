import './ReadText.css'
import { useState } from 'react'
import * as textsAPI from '../../utilities/texts-api'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { FaRegWindowClose } from "react-icons/fa";

export default function ReadText({ text }) {

  const [open, setOpen] = useState(false)
  const [simplifiedText, setSimplifiedText] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSimplifyClick() {
    setLoading(true)
    try {
      const data = await textsAPI.simplifyText(text.content)
      const simplifiedText = data.choices[0].message.content
      setSimplifiedText(simplifiedText)
    } catch (error) {
      console.error('Error simplifying text: ', error)
    } finally {
      setLoading(false)
    }
  }

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }


  return (
    <div className="ReadText">

      <h1 className="zh">{text.title}</h1>
      <h3>Source: {text.source}</h3>

      <span>Read an easier version of this text -- <button onClick={handleOpen}>Open</button></span>
      <Dialog
          open={open}
          onClose={handleClose}   
          PaperComponent={({ children }) => (
            <div style={{ 
              width: '60vmin', 
              height: '50vmin',
              backgroundColor: 'white',
              color: 'var(--drk-txt)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1vmin',
              borderRadius: '2vmin'
              }}>
              {children}
            </div>
          )}
        >
        <DialogActions style={{ 
          alignSelf: 'flex-end',
          padding: '0'
          }}>
          <Button
          onClick={handleClose}>
            <FaRegWindowClose className="close-icon"/>
          </Button>
        </DialogActions>

        <DialogContent>
          <DialogTitle>Feeling Stuck?</DialogTitle>
          <DialogContentText>
            <h3> Click to generate an easier version of this text. </h3>
            

            {loading ? (
              <span>Loading... (may take several seconds)</span>
            ) : (
              !simplifiedText && (
                  <button onClick={handleSimplifyClick}> Generate </button>
              )
            )}
            
            { simplifiedText && (
              <div>
                <p className="simplified-text zh">{simplifiedText}</p>
              </div>
            )}

            <p className="disclaimer">Disclaimer: This text is generated using artificial intelligence. While the model strives to produce accurate and coherent content, it may occasionally contain inaccuracies, grammatical errors, or unintended meaning. The AI model does not guarantee perfection, and the user is encouraged to exercise their judgment when interpreting the output.</p>
          </DialogContentText>
        </DialogContent>

      </Dialog>

      

        <div className="read-text-block">
          <p className="zh">{text.content}</p>
        </div>
    </div>
  )
}