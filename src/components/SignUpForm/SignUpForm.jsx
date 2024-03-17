import './SignUpForm.css'
import { useState } from 'react'
import { signUp } from '../../utilities/users-service'
import TextField from '@mui/material/TextField';

export default function SignUpForm({setUser}) {

  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  })

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  async function handleSubmit(evt) {
    evt.preventDefault()

    try {
      const formDataPayload = {...formData}
      delete formDataPayload.confirm
      delete formDataPayload.error
      const user = await signUp(formDataPayload)
      setUser(user)
    } catch(error) {
      console.log(error)
      setFormData({ 
        ...formData,
        error: 'Sign Up Failed - Try Again' })
    }
  }

  const disable = formData.password !== formData.confirm
  
  return (
    <>
      <div className="form-container">
        <h1>Sign Up</h1>
        <p>Signing up is free, and KnowNative will never use your email to contact you.</p>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-grp">
        <TextField 
            required
            id="filled-basic" 
            label="Name" 
            variant="filled" 
            name="name" 
            type="text" 
            onChange={handleChange} 
            value={formData.name}
            sx={{ width: '50%' }}
          />
          <TextField 
            required
            id="filled-basic" 
            label="Email" 
            variant="filled" 
            name="email" 
            type="text" 
            onChange={handleChange} 
            value={formData.email}
            sx={{ width: '50%' }}
          />
          </div>
          <div className="input-grp">
          <TextField 
            required
            id="filled-basic" 
            label="Password" 
            variant="filled" 
            name="password" 
            type="password" 
            onChange={handleChange} 
            value={formData.password}
            sx={{ width: '50%' }}
          />
          <TextField 
            required
            id="filled-basic" 
            label="Confirm Password" 
            variant="filled" 
            name="confirm" 
            type="password" 
            onChange={handleChange} 
            value={formData.confirm}
            sx={{ width: '50%' }}
          />
          </div>
          <button className="login-btn" type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
      </>
    )
}