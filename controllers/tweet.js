var TweetModel = require('../models/tweet')
const jwt = require('jsonwebtoken')

function create (req, res, next) {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      let newTweet = new TweetModel(req.body)
      newTweet.user = authData.user.email
      newTweet.save(function (err, user) {
        if (err) console.log(err)
        console.log('user', user)
        res.send(user)
      })
    }
  })
}

module.exports = {
  create
}
