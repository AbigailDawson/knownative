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
        <h3 className="section-heading">Feeling stuck?</h3>
        <p>Reading native texts is tough! Become more comfortable reading in your target language by starting with a slightly easier version. Once you're able to understand the content a little better, learning more will come naturally!</p>
        <button className="learn-btn" onClick={handleOpen}>Learn More</button>
        <Dialog
            open={open}
            onClose={handleClose}   
            PaperComponent={({ children }) => (
              <div style={{ 
                width: '70vmin', 
                height: '60vmin',
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

          <DialogContent style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              }}>
            <DialogContentText
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              }}>
                
                {!simplifiedText && !loading && <h3> Click to generate an easier version of this text. </h3> }

                  {!simplifiedText && !loading && <button className="generate-btn" onClick={handleSimplifyClick}> Generate </button>}

                  <Suspense fallback={<h2>Loading...</h2>}>
                    {loading ? (
                      <>
                        <h3> Generating </h3>
                        <p>This may take several seconds.</p>
                        <div class="loader"></div>
                      </>
                      ) : (
                        <>
                          {simplifiedText && <SimplifiedText simplifiedText={simplifiedText} saveSimplifiedText={saveSimplifiedText} />}
                        </>
                        
                      )}
                  </Suspense>
              
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