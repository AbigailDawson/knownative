import { useState, useEffect } from 'react'
import Popup from '../../components/Popup/Popup'

export default function Text({selectedText, setSelectedText, addWord, saveWord}) {

  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState('')
  const [popupPosition, setPopupPosition] = useState([0,0])

  useEffect(() => { // monitors the selectedText variable (this code will fire whenever selectedText changes)
    if (selectedText) { 
      setPopupContent(selectedText)
      setShowPopup(true)
    } else {
      handlePopup()
    }
  }, [selectedText])

  function handleMouseUp(evt) {
    handlePopup()
    getSelected()
    setPopupPosition([evt.pageX, evt.pageY]) // saves position where user clicks
  }
  
  function handlePopup() {
    if (showPopup) {
      setPopupContent('')
      setShowPopup(false)
      return
    }
  }

  async function getSelected() {
    let selection=''

    if (window.getSelection) {
      selection = window.getSelection().toString()
    } else if (document.getSelection) {
      selection = document.getSelection().toString()
    } else {
      selection = document.selection && document.selection.createRange()
    }

    if (!selection) {
      console.log('no selection')
      return
    }

    setSelectedText(selection)
    setPopupContent(selection)
    addWord(selection)
    setShowPopup(true)
  }

  return (
    <>
      <div className="Text" onMouseUp={handleMouseUp} onMouseDown={handlePopup}>
        <h1>Text</h1>
        <p>我是中国人。三學年大學學科能力測驗昨天舉行最後一天考試，考數學B、社會兩科。其中，社會科考題扣緊時事，並著重跨域整合，像是以俄烏戰爭考土耳其與俄國的地緣關係，提到土耳其的歷史脈絡和近年憲政體制的變化，探討俄烏戰爭發展與土耳其的關聯和影響。　全國教師會指出，今年社會科時事題較少，像是公民科題目多為配合歷史、地理出題，近一年的時事考題較少，而是以數年前的重大時事為主，例如新冠疫情、俄烏戰爭、轉型正義等。　臺北市建國中學歷史教師莊德仁表示，今年社會科不少題目將歷史、地理、公民三科結合，且試題扣緊國際時事，考生必須結合三科分析，才能判讀答案。</p>
      </div>
      {showPopup && (
        <Popup selectedText={popupContent} popupPosition={popupPosition} saveWord={saveWord} onClose={handlePopup} />
      )}
    </>
  )
}

// https://stackoverflow.com/questions/75351511/how-do-i-set-element-to-display-where-my-mouse-clicks-react
// https://dev.to/paisndulaksara/how-to-use-the-usestate-hook-to-showhide-content-in-react-2k68
// https://react.dev/learn/responding-to-events

// tokenizers
// https://www.npmjs.com/package/@nahanil/zh-tokenizer
// https://www.npmjs.com/package/novel-segment
// https://www.npmjs.com/package/chinese-tokenizer