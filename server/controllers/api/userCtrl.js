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
/*
res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
*/

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = jwt.createJWT(user);
    res.cookie("token", token, cookieOptions);
    res.json(user);
    console.log("User created:", user);
  } catch (error) {
    res.status(400).json({ message: "Duplicate email" });
    console.log(error);
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
