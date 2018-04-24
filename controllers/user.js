var UserModel = require('../models/user')

function create (req, res, next) {
  console.log('body', req.body)
  // res.send('ey')
  let newUser = new UserModel(req.body)
  newUser.save(function (err, user) {
    if (err) console.log(err)
    console.log('user', user)
    res.send(user)
  })
}

function login (req, res, next) {
  console.log('body', req.body)
  res.send(req.body)
}

module.exports = {
  create,
  login
}
