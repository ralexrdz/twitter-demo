var TweetController = require('../../controllers/tweet')

module.exports = function (app) {
  app.post('/api/tweets', TweetController.create)
}
