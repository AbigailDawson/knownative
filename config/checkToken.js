const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  let token = req.get('Authorization') || req.query.token // does the req have an authorization property? it should have a string that says 'Bearer' and a token if someone is logged in. if no user is logged in, we'll look for req.query.token, which we will have if a query string was used to make this request. this whole thing will resolve either to a token or null
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    // this .replace removes 'Bearer' and replaces with an empty string (so basically just removing it from the string)
    token = token.replace('Bearer ', '')
    // Check if token is valid and not expired using the .verify() method from the jwt library. the secret is used to make sure the token came from this server (it's the signature)
    // if there's a valid token, the function will run
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      req.user = err ? null : decoded.user // create a new property on the request object called user 
        // --> either evaluates to truthy (an error is present so there IS NO USER)
        // --> OR if it evaluates to falsey, THERE IS A USER so set that to the property
      // If your app cares... (optional) --> attach an exp property to the request object
      req.exp = err ? null : new Date(decoded.exp * 1000)
      return next()
    })
  } else {
    // No token was sent
    req.user = null
    return next()
  }
}