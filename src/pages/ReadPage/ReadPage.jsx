import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ReadPage.css'
import Text from '../../components/Text/Text'
import * as textsAPI from '../../utilities/texts-api'

export default function ReadPage() {

  let { id } = useParams()
  const [text, setText] = useState(null)

  const [selectedText, setSelectedText] = useState('') // <-- change to selection, setSelection

  useEffect(function() {
    async function getText() {
      const text = await textsAPI.getText(id)
      console.log('text: ', text)
      setText(text)
    }
    getText()
  }, [id])

  return (
    <main className="ReadPage">
      <section>
        <Text text={text} setSelectedText={setSelectedText} />
      </section>
    </main>
  )
}