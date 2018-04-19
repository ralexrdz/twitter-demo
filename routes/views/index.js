const TweetModel = require('../../models/tweet')

module.exports = function (app) {
  app.get('/', (req, res) => {
    TweetModel.find({}, function (err, tweets) {
      if (err) console.log(err)
      console.log('tweets.length', tweets.length)
      res.render('tweetlist', {tweets})
    })
  })
  app.get('/addtweet', (req, res) => {
    res.render('addtweet', {})
  })
}
