import { useState } from 'react'
import './MainPage.css'
import Text from '../../components/Text/Text'

export default function MainPage() {

  const [selectedText, setSelectedText] = useState('')

  return (
    <main className="MainPage">
      <section>
        <Text setSelectedText={setSelectedText} />
      </section>
    </main>
  )
}