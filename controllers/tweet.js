var TweetModel = require('../models/tweet')

function create (req, res, next) {
  console.log('body', req.body)
  let newTweet = new TweetModel(req.body)
  newTweet.save(function (err, user) {
    if (err) console.log(err)
    console.log('user', user)
    res.send(user)
  })
}

module.exports = {
  create
}
