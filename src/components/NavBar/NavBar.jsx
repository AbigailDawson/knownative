import { Link } from 'react-router-dom'
import * as usersService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    usersService.logOut() // userService is imported as an alias. this logOut() will remove the token (see users-service module)
    setUser(null) // don't forget to bring in setUser as a prop in the function params
  }

  return (
    <nav>
      Welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to='/orders'>Order History</Link>
      &nbsp; | &nbsp;
      <Link to='/main'>Main</Link>
      &nbsp; | &nbsp;
      <Link to='#' onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}