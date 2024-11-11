const jwt = require("jsonwebtoken");

//creates a web token from the JWT library
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

//verifies the presence of a JWT
function verifyJWT(req, res, next) {
  const token = req.cookies.token;
  try {
    if (!token) {
      throw new Error("No token present. Please log in or sign up");
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
}

module.exports = {
  createJWT,
  verifyJWT,
};
