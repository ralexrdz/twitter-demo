var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/twitter-demo')

var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', function (next) {
  console.log('pre')
  var user = this
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next()
  // hash the password using our new salt
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err)

    // override the cleartext password with the hashed one
    user.password = hash
    next()
  })
})

module.exports = mongoose.model('user', userSchema)
