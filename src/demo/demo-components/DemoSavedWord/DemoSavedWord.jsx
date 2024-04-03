import './DemoSavedWord.css'
import { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { PiTrashLight } from "react-icons/pi";


export default function DemoSavedWord({ word, updateMeaning, isEditingWord, setIsEditingWord, deleteWord }) {

  const [formData, setFormData] = useState({
    meaning: word.meaning
  })

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value
    };
    setFormData(newFormData)
  }

  function handleEditClick() {
    setIsEditingWord(word._id)
  }

  function handleUpdateMeaning(word) {
    if (word.meaning === formData.meaning) {
      setIsEditingWord(null)
      return
    }
    updateMeaning(word, formData.meaning)
  }

  function handleDeleteWord(word) {
    deleteWord(word)
  }
  
  return (
    <div className="SavedWord">

      {/* grid column 1 */}

      <div className="left-side">
      {isEditingWord &&
        <div className="word-delete-btn" onClick={() => handleDeleteWord(word)}><PiTrashLight /></div> }
        <div className="char-pinyin">
          <p className="pinyin"> { word.pinyin } </p>
          <p className="char zh">{ word.traditional } </p> 
        </div>
      </div>
      

      {/* grid column 2 */}

      <div className="meaning">
        {isEditingWord ? (
          <form className="updateMeaningForm" onSubmit={() => handleUpdateMeaning(word)}>
            <input
              type="text"
              name="meaning"
              value={formData.meaning}
              onChange={handleChange}
            />
            <button className="submit-btn" type="submit" ><FaCheckSquare className="submit-icon" /></button>
          </form>
        ) : (
          <div className="right-side">
            <div>{ word.meaning }</div>
            <div className="edit-btn" onClick={handleEditClick}><FaRegEdit /></div>
          </div>
        )}
      </div>

    </div>

  )
}