const User = require("../../models/user");
const bcrypt = require("bcrypt");
const { createJWT } = require("./../../utils/jwt");

module.exports = {
  create,
  logIn,
  getUser,
};

const cookieOptions = {
  httpOnly: true, // Prevents JavaScript access to the cookie
  secure: false,
  sameSite: "lax", // Prevents CSRF by limiting where the cookie can be sent
  maxAge: 24 * 60 * 60 * 1000, //Equals 1 day.
};

//NEEDED: create a csrf token as well!

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.cookie("token", token, cookieOptions);
    res.json(user);
    console.log("User created:", user);
  } catch (error) {
    if (error.code === 11000) {
      // MongoDB duplicate key error code
      console.log(`We found a dup email Error: ${error}`);
      res
        .status(400)
        .json({ message: "A user with that email address already exists!" });
    } else {
      res.status(400).json({
        message: "An error occurred during sign-up. Please try again.",
      });
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
    const token = createJWT(user);
    res.cookie("token", token, cookieOptions);
    console.log("it was supposed to create a cookie here!!");
    res.json(user);
    console.log("User successfully logged in:", user);
  } catch (error) {
    console.log(error);
    res.status(400).json("Invalid credentials");
  }
}

async function getUser(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      throw new Error(
        "Unable to find user in the database. Please try logging in again."
      );
    }
    res.json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
