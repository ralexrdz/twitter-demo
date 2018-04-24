var UserController = require('../../controllers/user')

module.exports = function (app) {
  app.post('/api/users', UserController.create)
  app.post('/api/users/login', UserController.login)
}
