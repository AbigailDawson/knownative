const User = require('../../models/user');
const bcrypt = require('bcrypt');
const { createJWT } = require('./../../utils/jwt');
const { sendResetPasswordMail } = require('../../utils/mail/customMail');
const ResetUserPassword = require('../../models/resetPassword');
const { generateToken } = require('../../utils/index');

module.exports = {
  create,
  logIn,
  getUser,
  logOut,
  forgotPassword,
  resetPassword,
};

const cookieOptions = {
  httpOnly: true, // Prevents JavaScript access to the cookie
  secure: false,
  sameSite: 'lax', // Prevents CSRF by limiting where the cookie can be sent
  maxAge: 24 * 60 * 60 * 1000, //Equals 1 day.
};

//NEEDED: create a csrf token as well!

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.cookie('token', token, cookieOptions);
    res.json(user);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        message: 'A user with that email address or username already exists!',
      });
    } else {
      res.status(400).json({
        message: 'An error occurred during sign-up. Please try again.',
      });
    }
  }
}

async function logIn(req, res) {
  try {
    console.log('Login attempt with:', {
      email: req.body.email,
      passwordProvided: !!req.body.password,
    });

    const user = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.email }],
    });

    if (!user) {
      console.log('User not found with email/username:', req.body.email);
      throw new Error('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    const token = createJWT(user);
    res.cookie('token', token, cookieOptions);
    res.json(user);
  } catch (error) {
    res.status(400).json('Invalid credentials');
  }
}

async function getUser(req, res) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      throw new Error(
        'Unable to find user in the database. Please try logging in again.'
      );
    }
    res.json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

async function logOut(req, res) {
  try {
    res.cookie(
      'token',
      {},
      {
        httpOnly: true,
        sameSite: 'lax',
        secure: false,
        maxAge: 0,
        path: '/',
      }
    );
    res.status(200).json({ message: 'Successfully logged out' });
  } catch (error) {
    res.status(403).json({ message: 'Unable to log out successfully' });
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
      throw new Error('User not found');
    }

    let resetUserPassData = await ResetUserPassword.findOne({
      userId: user._id,
    });

    if (!resetUserPassData) {
      // Generate token
      const token = generateToken();
      resetUserPassData = await ResetUserPassword.create({
        userId: user._id,
        token,
      });
    }

    const resetPasswordUrl = `${process.env.RESET_PASS_URL}?token=${resetUserPassData.token}`;

    await sendResetPasswordMail(email, resetPasswordUrl, user.username);

    res
      .status(200)
      .json({ message: 'Password resent link sent to your email account.' });
  } catch (error) {
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
    const { newPassword } = req.body;

    // Add validation to ensure newPassword exists
    if (!newPassword) {
      return res.status(400).json({ message: 'New password is required' });
    }

    const resetPasswordData = await ResetUserPassword.findOne({ token });

    if (!resetPasswordData)
      throw new Error('Reset password link has been expired!');

    const userData = await User.findById(resetPasswordData.userId);

    if (!userData) throw new Error('User not found!');

    // Instead of setting the hashed password directly and calling save(),
    // use the updateOne method which bypasses the pre-save hook
    await User.updateOne(
      { _id: userData._id },
      { $set: { password: await bcrypt.hash(newPassword, 10) } }
    );

    // Clean up the reset token entry
    await resetPasswordData.deleteOne();

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
