var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/twitter-demo')

var tweetSchema = mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('tweet', tweetSchema)
