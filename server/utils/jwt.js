const jwt = require("jsonwebtoken");

//creates a web token from the JWT library
function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

module.exports = {
  createJWT,
};
