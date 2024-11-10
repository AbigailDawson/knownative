const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("./../../utils/jwt");

module.exports = {
  create,
  logIn,
  //checkToken
};

const cookieOptions = {
  httpOnly: true, // Prevents JavaScript access to the cookie
  // secure: true, // Ensures the cookie is only sent over HTTPS
  sameSite: "strict", // Prevents CSRF by limiting where the cookie can be sent
  maxAge: 24 * 60 * 60 * 1000, // Adjust expiration as needed
};

//cookie storage?
//res.cookie on the server.
//react-cookie on the front-end.
//task- figure out how storing the token in cookies would work.

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = jwt.createJWT(user);
    res.cookie("token", token, cookieOptions);
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
      $or: [{ email: req.body.email }, { username: req.body.email }],
    });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }
    const token = jwt.createJWT(user);
    res.cookie("token", token, cookieOptions);
    res.json(user);
    console.log("User successfully logged in:", user);
  } catch (error) {
    console.log(error);
    res.status(400).json("Invalid credentials");
  }
}

// function checkToken(req, res) {
//   res.json(req.exp)
// }
