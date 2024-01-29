import './SavedWord.css'
import { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function SavedWord({ word, updateMeaning, isEditingWord, setIsEditingWord }) {

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
  
  return (
    <div className="SavedWord">

      {/* grid column 1 */}

      <div className="char-pinyin">
        <p className="small"> { word.pinyin } </p>
        <p>{ word.traditional } </p> 
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
            <button className="submit-btn" type="submit" ><IoMdCheckboxOutline /></button>
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