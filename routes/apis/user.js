const passport = require('passport')
var UserController = require('../../controllers/user.js')

module.exports = function (app) {
  /* GET users listing. */
  app.post('/api/login', UserController.login)
  app.get('/api/user/:id', UserController.findByName)
  app.get('/api/users', UserController.findAll)
  app.post('/api/users', passport.authorize('local'), UserController.create)
  app.put('/api/user/:id', UserController.update)
  app.delete('/api/user/:id', UserController.remove)
}
