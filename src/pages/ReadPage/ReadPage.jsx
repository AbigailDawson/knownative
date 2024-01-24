import { useState } from 'react'
import './ReadPage.css'
import Text from '../../components/Text/Text'

export default function ReadPage() {

  const [selectedText, setSelectedText] = useState('')

  return (
    <main className="ReadPage">
      <section>
        <Text setSelectedText={setSelectedText} />
      </section>
    </main>
  )
}