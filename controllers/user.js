var UserModel = require('../models/user')
var bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function create (req, res, next) {
  console.log('create', req.body)
  // res.send('ey')
  let newUser = new UserModel(req.body)
  newUser.save(function (err, user) {
    if (err) console.log(err)
    console.log('user', user)
    res.send(user)
  })
}

function login (req, res, next) {
  UserModel.findOne({email: req.body.email}, (err, user) => {
    console.log(err)
    console.log(user)
    bcrypt.compare(req.body.password, user.password, (err, samepass) => {
      console.log(err)
      if (samepass) {
        console.log('encuentro', user)
        jwt.sign({user}, 'secretkey', { expiresIn: '2d' }, (err, token) => {
          if (err) return
          console.log('token', token)
          res.cookie('jwt', token)
          res.json({
            token
          })
        })
      } else {
        res.sendStatus(403)
      }
    })
  })
}

module.exports = {
  create,
  login
}
