import { useState } from 'react'
import * as usersService from '../../utilities/users-service'

export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  function handleChange(evt) { // updates the credentials state based on which input is being changed. also updates the error state
    setCredentials({ 
      ...credentials, 
      [evt.target.name]: evt.target.value 
    })
    setError('')
  }

  async function handleSubmit(evt) {
    evt.preventDefault() // Prevent form from being submitted to the server
    try {
      // The promise returned by the signUp service method will resolve to the user object included in the payload of the JSON Web Token (JWT)
      const user = await usersService.logIn(credentials)
      setUser(user) // triggers the re-render
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}