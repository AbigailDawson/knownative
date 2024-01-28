import './SavedWord.css'
import { useState } from 'react'
import { RiQuillPenFill } from "react-icons/ri";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function SavedWord({ word, isEditMode }) {

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

  function handleUpdateMeaning(evt) {
    evt.preventTargetDefault()
    alert('formData: ', formData)
    // updateMeaning(formData)
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
          {isEditMode ? (
            <form className="updateMeaningForm" onSubmit={handleUpdateMeaning}>
              <input
                type="text"
                name="meaning"
                value={formData.meaning}
                onChange={handleChange}
              />
              <button type="submit">√</button>
            </form>
          ) : (
            <p>{ word.meaning }</p>
          )}
        </div>

        {/* grid column 3 */}

        <div className="delete-button">
          {isEditMode && (
            <>
              <div><RiDeleteBin2Fill /></div>
            </>
          )}
        </div>

      </div>

  )
}