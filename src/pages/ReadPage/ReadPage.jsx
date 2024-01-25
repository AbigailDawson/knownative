import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ReadPage.css'
import Text from '../../components/Text/Text'
import SavedItemsList from '../../components/SavedItemsList/SavedItemsList'
import * as textsAPI from '../../utilities/texts-api'

export default function ReadPage() {

  let { id } = useParams()
  const [text, setText] = useState({})

  const [selectedText, setSelectedText] = useState('') // <-- change to selection, setSelection
  const [savedItems, setSavedItems] = useState([])

  useEffect(function() {
    async function getText() {
      const text = await textsAPI.getText(id)
      console.log('text: ', text)
      setText(text)
    }
    getText()
  }, [id])

  // async function saveItem(newItem) {
  //   await textsAPI.saveItem(newItem)
  //   // setSavedItems([...savedItems, newItem])
  // }

  return (
    <main className="ReadPage">
      <section>
        <Text text={text} setSelectedText={setSelectedText} />
        {/* <SavedItemsList savedItems={savedItems} /> */}
      </section>
    </main>
  )
}