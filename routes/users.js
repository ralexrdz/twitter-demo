var express = require('express')
var router = express.Router()

var UserController = require('../controllers/user.js')

/* GET users listing. */
router.get('/user/:name', UserController.findByName)
router.get('/users', UserController.findAll)
router.post('/users', UserController.create)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.remove)

module.exports = router
