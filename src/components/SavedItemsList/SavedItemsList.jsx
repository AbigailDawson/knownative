import SavedItem from '../SavedItem/SavedItem'

export default function SavedItemsList({ savedItems }) {
  const SavedItems = savedItems.map((item) => (
    <SavedItem
      key={item._id}
      traditional={item.traditional}
      simplified={item.simplified}
      pinyin={item.pinyin}
      meaning={item.meaning}
    />
  ))
  return (
    <div className="SavedItemList">
      <h1>Saved</h1>
      <p>Items saved using the Save button</p>
      <ul className="SavedItems">{SavedItems}</ul>
    </div>
  )
}