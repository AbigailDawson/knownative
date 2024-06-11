module.exports = function(req, res, next) {
  // Status code of 401 is Unauthorized
  // if there is no user attached to the req object, we are going to send the 401 error
  if (!req.user) return res.status(401).json('Unauthorized')
  // otherwise (if someone is logged in) we'll just continue ...
  next()
}