import { useState } from 'react'
import { signUp } from '../../utilities/users-service' // named imports are not DEFAULT exports, so don't write export default ... in the module, instead write export async .... (see users-service). this is the way to import when you are just using the one little function that you're importing. OR you can bundle a bunch of things from a module with a * to import them all at once. for example, see the line at the top of (users-service)

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

  const disable = formData.password !== formData.confirm;
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
      </div>
    )
}