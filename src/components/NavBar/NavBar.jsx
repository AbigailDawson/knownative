import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import * as usersService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    usersService.logOut() // userService is imported as an alias. this logOut() will remove the token (see users-service module)
    setUser(null) // don't forget to bring in setUser as a prop in the function params
    navigate('/')
  }

  return (
    <nav>
      <div className="nav-left">
        <h1>KnowNative</h1>
      </div>
      <div className="nav-right">
        <Link to='/dashboard' className="nav-link">Dashboard</Link>
        &nbsp; | &nbsp;
        <Link to='#' className="nav-link" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  )
}