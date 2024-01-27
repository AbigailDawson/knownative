import SavedWord from '../../components/SavedWord/SavedWord'

export default function SavedWordsList({ savedWords }) {
  console.log(savedWords)
  const savedWordItems = savedWords.map((word) => (
    <SavedWord
      key={word.id}
      word={word}
    />
  ))

  return (
    <>
      {savedWordItems}
    </>
  )
}