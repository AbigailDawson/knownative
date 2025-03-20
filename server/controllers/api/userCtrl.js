const User = require("../../models/user");
const bcrypt = require("bcrypt");
const { createJWT } = require("./../../utils/jwt");
const { sendResetPasswordMail } = require("../../utils/mail/customMail");
const ResetUserPassword = require("../../models/resetPassword");
const { generateToken } = require("../../utils/index");


module.exports = {
  create,
  logIn,
  getUser,
  logOut,
  forgotPassword,
  resetPassword
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
      console.log(`We found a dup email or username Error: ${error}`);
      res
        .status(400)
        .json({
          message: "A user with that email address or username already exists!",
        });
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

async function logOut(req, res) {
  console.log("Entered the logout function.");
  try {
    res.cookie(
      "token",
      {},
      {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 0,
        path: "/",
      }
    );
    res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    res.status(403).json({ message: "Unable to log out successfully" });
  }
}

/**
 * @api { POST } /users/forgot-password
 * @param {*} req 
 * @param { email } req.body
 * @param {*} res 
 */

async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found")
    }

    let resetUserPassData = await ResetUserPassword.findOne({ userId: user._id });

    if (!resetUserPassData) {
      // Generate token
      const token = generateToken();
      resetUserPassData = await ResetUserPassword.create({ userId: user._id, token });
    }

    const resetPasswordUrl = `${process.env.RESET_PASS_URL}/:${resetUserPassData.token}`;

    await sendResetPasswordMail(email, resetPasswordUrl, user.username);

    res.status(200).json({ message: "Password resent link sent to your email account." });
  }
  catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message });
  }
}
/**
 * @api { POST } /users/reset-password/:token
 * @param {*} req
 * @param { token } req.params
 * @param { newPassword } req.body
 * @param {*} res 
 */
async function resetPassword(req, res) {
  try {
    const { token } = req.params;

    const resetPasswordData = await ResetUserPassword.findOne({ token });

    if (!resetPasswordData) throw new Error("Reset password link has been expired!");

    const userData = await User.findById(resetPasswordData.userId);

    if (!userData) throw new Error("User not found!")

    userData.password = req.body.newPassword;

    await userData.save();
    await resetPasswordData.deleteOne();

    res.status(200).json({ message: "Password reset successfully" });
  }
  catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message });
  }
}
