const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  logIn,
  checkToken
}

async function create(req, res) {
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    res.json(token)
  } catch(error) {
    res.status(400).json(error)
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

// function checkToken(req, res) {
//   res.json(req.exp)
// }

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign( // creates a web token from the JWT library
    { user },
    process.env.SECRET, // signs to the server
    { expiresIn: '24h' }
  )
}