import './NavBar.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import * as usersService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate()
  const location = useLocation()

  function handleLogOut() {
    usersService.logOut() 
    setUser(null)
    navigate('')
  }

  return (
    <nav>
      <div className="nav-left">
        <img src="/images/knlogo2.png" alt="KnowNative Logo Image" style={{height: '11vmin'}} />
      </div>
      <div className="nav-right">
        <Link to='/dashboard' className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
        &nbsp; | &nbsp;
        <Link to='#' className="nav-link" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  )
}