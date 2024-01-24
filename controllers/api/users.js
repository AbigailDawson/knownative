const User = require('../../models/user')
const jwt = require('jsonwebtoken') // now create an evt to store the secret string for 'signing' the JWT
const bcrypt = require('bcrypt')

module.exports = {
  create,
  logIn,
  checkToken
}

async function create(req, res) {
  try {
    const user = await User.create(req.body) // req.body carries all the info from the form
    const token = createJWT(user) // call the helper function below to return the token
    res.json(token) // respond to the client and send back the token
  } catch(error) {
    res.status(400).json(error) // res.status(400) goes to wherever we make the fetch request (users-api module) where res.ok only evaluates to true if we have a status of 200s --> so this will throw an error in users-api because res.ok will evaluate to false. that's how we'll see signup failed on the form in the UI
  }
}

async function logIn(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      throw new Error('Invalid credentials')
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password)
    if (!passwordMatch) {
      throw new Error('Invalid credentials')
    }
    res.json(createJWT(user)) // creates token
  } catch(error) {
    console.log(error)
    res.status(400).json('Invalid credentials')
  }
}

function checkToken(req, res) {
  res.json(req.exp)
}

/*-- Helper Functions --*/

function createJWT(user) { // pass in a user doc. this function will be used for both signing up and logging in. it will be called in Create and Login
  return jwt.sign( // .sign() actually creates a web token from the JWT library that we installed and required.
    // pass in the data payload
    { user }, // object with a user property (contains the user object). this is object shorthand syntax. creates a key-value pair
    process.env.SECRET, // signs to the server. secret is found in env file
    { expiresIn: '24h' } // options object - set the expiration of the JWT. 
  )
}