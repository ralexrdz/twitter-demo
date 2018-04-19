var UserModel = require('../../models/user')

module.exports = function (app) {
  app.get('/', (req, res) => {
    res.render('index', {title: 'Index'})
  })
  app.get('/usertable', (req, res) => {
    UserModel.find({}, function (err, users) {
      if (err) console.log(err)
      console.log('users.length', users.length)
      res.render('users', {users})
    })
  })
  app.get('/register', (req, res) => {
    res.render('registro', {})
  })
  app.get('/login', (req, res) => {
    res.render('login', {})
  })
}
