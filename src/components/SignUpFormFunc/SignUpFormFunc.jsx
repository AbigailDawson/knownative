import './SignUpForm.css'
import { useState } from 'react'
import { signUp } from '../../utilities/users-service' // named imports are not DEFAULT exports, so don't write export default ... in the module, instead write export async .... (see users-service). this is the way to import when you are just using the one little function that you're importing. OR you can bundle a bunch of things from a module with a * to import them all at once. for example, see the line at the top of (users-service)
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
      ...formData, // include all the properties of our existing formData
      [evt.target.name]: evt.target.value,
      error: '' // error should be empty when a change occurs on these inputs
    })
  }

  async function handleSubmit(evt) { // make this function async
    evt.preventDefault() // stop the page from reloading

    try { // use the try block to set the payload (what gets sent to the server)
      const formDataPayload = {...formData} // creates a copy of the state object with all the same properties
      delete formDataPayload.confirm // remove key-value pairs using the 'delete' keyword
      delete formDataPayload.error
      const user = await signUp(formDataPayload) // call the signup function and pass it in the payload we just created. store that in the user variable (write this line before defining the signUp function. THEN import at the top of file from users-service module ---> that's bc there's non-fetch behavior that we need thats going to live in the users-service module. until this function exists, the try block will fail and we will get the error message from the catch block)
      setUser(user)
    } catch(error) { // this runs if the try block fails at any point
      console.log(error)
      setFormData({ 
        ...formData,
        error: 'Sign Up Failed - Try Again' }) // sets the state of this component
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
            type="text" 
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
            type="text" 
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