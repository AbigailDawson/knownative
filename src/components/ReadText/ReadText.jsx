import './ReadText.css'
import { useState, useEffect, Suspense } from 'react'
import * as textsAPI from '../../utilities/texts-api'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FaRegWindowClose } from "react-icons/fa"
import { FaRegLightbulb } from "react-icons/fa6";
import { BiExpand } from "react-icons/bi";
import { BiCollapse } from "react-icons/bi";
import SimplifiedText from '../../components/SimplifiedText/SimplifiedText'

export default function ReadText({ text }) {

  const [open, setOpen] = useState(false)
  const [simplifiedText, setSimplifiedText] = useState(null)
  const [loading, setLoading] = useState(false)
  const [savedSimplifiedText, setSavedSimplifiedText] = useState(null)
  const [isExpandedEasier, setIsExpandedEasier] = useState(false)
  const [isExpandedOriginal, setIsExpandedOriginal] = useState(false)

  useEffect(function() {
    function getSavedSimplifiedText() {
      setSavedSimplifiedText(text.simplifiedText)
    }
  }, [savedSimplifiedText])

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
    handleClose()
  }

  function handleRemoveClick() {
    removeSimplifiedText(text._id)
  }

  async function removeSimplifiedText() {
    const updatedText = await textsAPI.removeSimplifiedText(text._id);
    setSavedSimplifiedText(null)
  }

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleExpandToggleEasier() {
    setIsExpandedEasier(!isExpandedEasier);
  }

  function handleExpandToggleOriginal() {
    setIsExpandedOriginal(!isExpandedOriginal);
  }



  return (
    <div className="ReadText">

      <div className="top">

        { !savedSimplifiedText && (
          <>
          <Accordion style={{
          width: '40%',
          maxWidth: '30vmin'
        }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{
              color: 'black',
            }}/>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className="accordion-title">
              <FaRegLightbulb className="bulb-icon" />
              <h1 className="section-heading">Feeling stuck?</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2vmin',
          }}>
            <button className="learn-btn" onClick={handleOpen}>Click to read an easier version of this text!</button>
          </AccordionDetails>
        </Accordion>
        <Dialog
            open={open}
            onClose={handleClose}   
            PaperComponent={({ children }) => (
              <div style={{ 
                width: '80vmin', 
                height: '70vmin',
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
              textAlign: 'center',
              }}>
                
                {!simplifiedText && !loading && (
                  <>
                    <h3 className="generate-txt"> Reading native texts can be tough. </h3> 
                    <p>If you’re feeling stuck, try reading a slightly easier version of this text! Click below to recreate this text at a 5th-grade reading level.</p>
                    <button className="generate-btn" onClick={handleSimplifyClick}> Generate! </button>
                    <p className="disclaimer">Note: Generator currently only supports up to 500 characters of text at a time. If your text is longer, consider dividing it into sections before generating.</p>
                  </>
              )}

                  <Suspense fallback={<h2>Loading...</h2>}>
                    {loading ? (
                      <>
                        <h1> Generating . . . </h1>
                        <p>This may take several seconds.</p>
                        <div className="loader"></div>
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
        </>
        )}
        </div>

        { !savedSimplifiedText && (
        <div className="bottom">
          <div className="read-text-block">
            <p className="zh">{text.content}</p>
          </div>
        </div>
        )}
        
        
        { savedSimplifiedText && (
          <div className="container">
          {!isExpandedOriginal && (
              <div className={`read-text-block simplified ${isExpandedEasier ? 'expanded' : 'collapsed'}`}>
                <div className="block-heading">
                  <div>
                    <h3>Easier</h3>
                    <button className="remove-easier" onClick={() => handleRemoveClick(text._id)}>Remove</button>
                  </div>
                  {isExpandedEasier? (
                    <BiCollapse className="expand-icon" onClick={handleExpandToggleEasier} />
                  ) : (
                    <BiExpand className="expand-icon" onClick={handleExpandToggleEasier} />
                  )}
                </div>
                <p className="zh">{text.simplifiedText}</p>
              </div>
            )}

          {!isExpandedEasier && (
            <div className={`original ${isExpandedOriginal ? 'expanded' : 'collapsed'}`}>
              <div className="read-text-block">
                <div className="block-heading">
                  {isExpandedOriginal? (
                    <BiCollapse className="expand-icon" onClick={handleExpandToggleOriginal} />
                  ) : (
                    <BiExpand className="expand-icon" onClick={handleExpandToggleOriginal} />
                  )}
                  <h3>Original</h3>
                </div>
                <p className="zh">{text.content}</p>
              </div>
            </div>
          )}
          </div>
        )}
        
      </div>
        

      
  )
}