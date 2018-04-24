var TweetController = require('../../controllers/tweet')

module.exports = function (app) {
  app.post('/api/tweets', verifyToken, TweetController.create)
}

function verifyToken (req, res, next) {
  // Get auth header value
  console.log('cookies', req.signedCookies)
    // Set the token
  req.token = req.cookies.jwt
  // Next middleware
  next()
}
