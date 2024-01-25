import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ReadPage.css'
import Text from '../../components/Text/Text'
import * as textsAPI from '../../utilities/texts-api'

export default function ReadPage() {

  const { id } = useParams()
  const [text, setText] = useState(null)
  const [tokenizedText, setTokenizedText] = useState([])

  useEffect(function() {
    async function getText() {
      const text = await textsAPI.getText(id)
      setText(text)
    }
    getText()
  }, [id])

  useEffect(function() {
    async function getTokenizedText() {
      if (text) {
        const tokenizedText = await textsAPI.tokenizeText(text.content)
        setTokenizedText(tokenizedText)
      }
    }
    getTokenizedText()
  }, [text])

  return (
    <main className="ReadPage">
      <section>
        {text ? <Text text={text} tokenizedText={tokenizedText} /> : 'Loading data'}
      </section>
    </main>
  )
}