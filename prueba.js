let app = require('express')()
const bodyParser = require('body-parser')

// sin esto no hay req.body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hola')
  // res.render('index', {title: 'Index'})
})

app.get('/p/:parametro', (req, res) => {
  console.log(req.params)
  res.send('hola')
  // res.render('index', {title: 'Index'})
})

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send(req.body)
  // res.render('index', {title: 'Index'})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
