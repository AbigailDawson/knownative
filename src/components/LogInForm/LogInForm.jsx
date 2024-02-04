import './LogInForm.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service'
import TextField from '@mui/material/TextField';

export default function LogInForm({ setUser }) {
  const navigate = useNavigate();

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
      navigate('/dashboard')
    } catch {
      setError('Log In Failed - Try Again')
    }
  }

  return (
    <>
      <div className="form-container">
        <h1>Log In</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField 
            required
            id="filled-basic" 
            label="Email" 
            variant="filled" 
            name="email" 
            type="text" 
            onChange={handleChange} 
            value={credentials.email}
            sx={{ width: '80%' }}
          />
          <TextField 
            required
            id="filled-basic" 
            label="Password" 
            variant="filled" 
            name="password" 
            type="password" 
            onChange={handleChange} 
            value={credentials.password}
            sx={{ width: '80%' }}
          />
        <button className="login-btn" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  )
}