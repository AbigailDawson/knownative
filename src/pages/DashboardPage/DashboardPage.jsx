import { useState, useEffect } from 'react'
import './DashboardPage.css'
import * as textsAPI from '../../utilities/texts-api'
import * as wordsAPI from '../../utilities/words-api'
import NewTextForm from '../../components/NewTextForm/NewTextForm'
import TextListItem from '../../components/TextListItem/TextListItem'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export default function DashboardPage({ user, texts, setTexts }) {

  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  
  const [sortBy, setSortBy] = useState('created')

  const [numTexts, setNumTexts] = useState(0)
  const [numArchivedTexts, setNumArchivedTexts] = useState(0)
  const [numSavedWords, setNumSavedWords] = useState(0)
  

  useEffect(function() {
    async function getStats() {
      const numSavedWords = await wordsAPI.countSavedWords()
      setNumSavedWords(numSavedWords)
      setNumTexts(texts.length)
      const archivedTexts = texts
      .filter(text => text.archived)
      setNumArchivedTexts(archivedTexts.length)
    }
    getStats()
  }, [])

  function handleTabClick(tabName) {
    setActiveTab(tabName)
  }

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  async function handleAddText(textData) {
    const text = await textsAPI.addNewText(textData)
    setTexts([...texts, text])
    setNumTexts(numTexts + 1)
    handleClose()
  }

  async function archiveText(text, id) {
    const updatedText = await textsAPI.archiveText(text, id)
    setTexts(prevTexts => 
      prevTexts.map(text =>
        text._id === updatedText._id ? updatedText : text))
    setNumArchivedTexts(numArchivedTexts + 1)
  }

  async function deleteText(textToDelete, id) {
    setTexts(prevTexts => 
      prevTexts.filter(text => text._id !== textToDelete._id))

    try {
      await textsAPI.deleteText(textToDelete, id)
    } catch (error) {
      console.error(error)
    }
  }

  async function favoriteText(text, id) {
    const updatedText = await textsAPI.favoriteText(text, id)
    setTexts(prevTexts => 
      prevTexts.map(text =>
        text._id === updatedText._id ? updatedText : text))
  }

  function handleSortBy(sortType) {
    setSortBy(sortType)
  }

  const sortedTexts = [...texts].sort((a, b) => {
    if (sortBy === 'created') {
      return new Date(b.createdAt) - new Date(a.createdAt)
    } else if (sortBy === 'updated') {
      return new Date(b.updatedAt) - new Date(a.updatedAt)
    }
    return 0
  })
  
  function createTextListItem(text) {
    return (
      <TextListItem
        key={text._id}
        text={text}
        id={text._id}
        title={text.title}
        source={text.source}
        content={text.content}
        favorite={text.favorite}
        archived={text.archived}
        deleteText={deleteText}
        archiveText={archiveText}
        favoriteText={favoriteText}
        activeTab={activeTab}
      />
    );
  }

  const textListItems = sortedTexts
    .filter(text => !text.archived)
    .map(createTextListItem)

  const favoriteListItems = sortedTexts
    .filter(text => text.favorite)
    .map(createTextListItem)

  const archivedListItems = sortedTexts
    .filter(text => text.archived)
    .map(createTextListItem)

  return (
  <main className="DashboardPage page">
    <aside className="sidebar">
      <Sidebar 
        user={user}
        numTexts={numTexts}
        numArchivedTexts={numArchivedTexts}
        numSavedWords={numSavedWords}
      />
    </aside>

    <section className="main-area">

      <div className="main-area-header">
        <h1>My Texts</h1>
        <button onClick={handleOpen}>+ New</button>
      </div>

        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabClick('all')} >All</button>
          <button className={`tab-btn ${activeTab === 'favorites' ? 'active' : ''}`} onClick={() => handleTabClick('favorites')} >Favorites</button>
          <button className={`tab-btn ${activeTab === 'archived' ? 'active' : ''}`} onClick={() => handleTabClick('archived')} >Archived</button>
        </div>

        <Dialog
          open={open}
          onClose={handleClose}   
          PaperComponent={({ children }) => (
            <div style={{ 
              minWidth: '400px', 
              maxWidth: '800px', 
              width: '80vw',
              backgroundColor: 'white',
              color: 'var(--drk-txt)' 
              }}>
              {children}
            </div>
          )}
        >
        <DialogTitle>Add New Text</DialogTitle>
        <DialogContent>
          <NewTextForm handleAddText={handleAddText} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <div className="list-area">
        <div className="sort-options">
          <span>Sort by: </span>
          <a onClick={() => handleSortBy('created')}>Newest</a> &nbsp; | &nbsp;
          <a onClick={() => handleSortBy('updated')}>Recently Updated</a>
        </div>
        { activeTab === 'all' && (
          <div className="textListItems">{textListItems}</div>
        )}
        { activeTab === 'favorites' && (
          <div className="favoriteListItems">{favoriteListItems}</div>
        )}
        { activeTab === 'archived' && (
          <div className="archivedListItems">{archivedListItems}</div>
        )}
      </div>
      
    </section>
  </main>
  )
}