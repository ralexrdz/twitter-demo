const express = require('express')
const bodyParser = require('body-parser')
// const session = require('express-session')
// const passport = require('passport')
var cookieParser = require('cookie-parser')
const path = require('path')
const app = express()

app.use(cookieParser())
// const AuthController = require('./controllers/auth')

const viewRoutes = require('./routes/views/index')
const tweetRoutes = require('./routes/apis/tweets')
const userRoutes = require('./routes/apis/user')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

viewRoutes(app)
tweetRoutes(app)
userRoutes(app)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
