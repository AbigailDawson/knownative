const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  create,
  logIn,
  //checkToken
}

//cookie storage?
//res.cookie on the server.
//react-cookie on the front-end.
//task- figure out how storing the token in cookies would work. 
/*
res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
*/

async function create(req, res) {
  try {
    const user = await User.create(req.body)
    const token = createJWT(user)
    // res.json(token)
    //insert token storage into a cookie here.
    res.json(user);
    console.log('User created:', user)
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error code
      console.log(`We found a dup email Error: ${error}`);
      res.status(400).json({ message: 'A user with that email address already exists!' });
    } else {
      res.status(400).json({ message: 'An error occurred during sign-up. Please try again.' });
    }
  }
}

async function logIn(req, res) {
  try {
    const user = await User.findOne({
      $or: [
          { email: req.body.email },
          { username: req.body.email }
      ]
    });
    if (!user) {
      throw new Error('Invalid credentials')
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password)
    if (!passwordMatch) {
      throw new Error('Invalid credentials')
    }
    const token = createJWT(user)
    // res.json(createJWT(user)) -> previous code
    //insert token storage into a cookie here.
    res.json(user);
    console.log('User successfully logged in:', user)
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