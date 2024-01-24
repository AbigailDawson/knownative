import { useState } from 'react'
import './MainPage.css'
import Text from '../../components/Text/Text'
import NewTextForm from '../../components/NewTextForm/NewTextForm'

export default function MainPage() {

  const [selectedText, setSelectedText] = useState('')

  return (
    <main className="MainPage">
      <section>
        <NewTextForm />
        <Text setSelectedText={setSelectedText} />
      </section>
    </main>
  )
}