import './ReadText.css'
import { useState, useEffect, Suspense } from 'react'
import * as textsAPI from '../../utilities/texts-api'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { FaRegWindowClose } from "react-icons/fa"
import SimplifiedText from '../../components/SimplifiedText/SimplifiedText'

export default function ReadText({ text }) {

  const [open, setOpen] = useState(false)
  const [simplifiedText, setSimplifiedText] = useState(null)
  const [loading, setLoading] = useState(false)
  const [savedSimplifiedText, setSavedSimplifiedText] = useState(null)

  useEffect(function() {
    function getSavedSimplifiedText() {
      setSavedSimplifiedText(text.simplifiedText)
    }
  }, [])

  async function handleSimplifyClick() {
    try {
      setLoading(true)
      const data = await textsAPI.simplifyText(text.content)
      const simplifiedText = data.choices[0].message.content
      setSimplifiedText(simplifiedText)
    } catch (error) {
      console.error('Error simplifying text: ', error)
    } finally {
      setLoading(false) 
    }
  }

  async function saveSimplifiedText(simplifiedText) {
    const updatedText = await textsAPI.saveSimplifiedText(simplifiedText, text._id);
    setSavedSimplifiedText(updatedText.simplifiedText)
  }

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div className="ReadText">

      <div className="top">
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
            <DialogTitle style={{ 
              textAlign: 'center'
              }}
              >Feeling Stuck?</DialogTitle>
            <DialogContentText
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              }}>
                <h3> Click to generate an easier version of this text. </h3>

                  {!simplifiedText && !loading && <button className="generate-btn" onClick={handleSimplifyClick}> Generate </button>}

                  <Suspense fallback={<h2>Loading...</h2>}>
                    {loading ? (
                      <div class="loader"></div>
                      ) : (
                        <>
                          {simplifiedText && <SimplifiedText simplifiedText={simplifiedText} saveSimplifiedText={saveSimplifiedText} />}
                        </>
                        
                      )}
                  </Suspense>
                <p className="disclaimer">Disclaimer: This text is generated using artificial intelligence. While the model strives to produce accurate and coherent content, it may occasionally contain inaccuracies, grammatical errors, or unintended meaning. The AI model does not guarantee perfection, and the user is encouraged to exercise their judgment when interpreting the output.</p>
              
            </DialogContentText>
          </DialogContent>

        </Dialog>
      </div>

      <div className="bottom">
        <div className="read-text-block">
          <p className="zh">{text.content}</p>
        </div>
      </div>
      
    </div>
  )
}