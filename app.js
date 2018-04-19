const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const app = express()

const AuthController = require('./controllers/auth')

const viewRoutes = require('./routes/views/user')
const apiRoutes = require('./routes/apis/user')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({ secret: process.env.COOKIE_KEY }))
// always after express-session initialization
app.use(passport.initialize())
app.use(passport.session())

var LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'passwd'
  },
  AuthController.local
))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

viewRoutes(app)
apiRoutes(app)

// --------------------------------- Adding static ------------------------
// app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
