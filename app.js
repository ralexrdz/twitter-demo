const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const path = require('path')
const app = express()

// const AuthController = require('./controllers/auth')

const viewRoutes = require('./routes/views/index')
const apiRoutes = require('./routes/apis/tweets')

/// set
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

viewRoutes(app)
apiRoutes(app)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
