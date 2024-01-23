import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import './App.css'
import AuthPage from '../AuthPage/AuthPage'
import MainPage from '../MainPage/MainPage'
import NavBar from '../../components/NavBar/NavBar'

function App() {
  const [user, setUser] = useState(getUser()) // set the initial state of the user to whatever is returned from the getUser() function, coming from the users-service module

  
  return (
    <main className='App'>
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  )
}

export default App;
