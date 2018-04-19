const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var UserModel = require('../models/user')

function findByName (req, res, next) {
  UserModel.find({name: req.params.id}, function (err, users) {
    if (err) console.log(err)
    res.send(users)
  })
}
function findAll (req, res, next) {
  UserModel.find({}, function (err, users) {
    if (err) console.log(err)
    res.send(users)
  })
}
function create (req, res, next) {
  let newUser = new UserModel(req.body)
  newUser.save(function (err, user) {
    if (err) console.log(err)
    res.send(user)
  })
}
function update (req, res, next) {
  UserModel.findOne({name: req.params.id}, function (err, user) {
    if (err) console.log(err)
    if (req.body.name) user.name = req.body.name
    user.age = req.body.age
    user.save(function (err, savedUser) {
      if (err) console.log(err)
      res.send(savedUser)
    })
  })
}
function remove (req, res, next) {
  UserModel.findOne({name: req.params.id}, function (err, res) {
    if (err) console.log(err)
    res.remove()
  })
}
function login (req, res, next) {
  UserModel.findOne({email: req.body.email}, function (err, user) {
    if (err) console.log(err)
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, valid) => {
        if (err) console.log(err)
        if (valid) {
          jwt.sign({user}, process.env.JWT_KEY, (err, token) => {
            if (err) console.log(err)
            return res.json({token})
          })
        }
        else res.sendStatus(401)
      })
    } else res.sendStatus(401)
  })
}

module.exports = {
  findByName,
  findAll,
  create,
  update,
  remove,
  login
}
