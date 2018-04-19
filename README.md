# Node Express API

## [Express](https://expressjs.com/)

Framework -
Web apps

### Features

- Middleware for HTTP Requests
  - Request
  - Response
- Router for HTTP METHODS and URLS
- Template HTML
  - Jade
  - [Handlebars](https://handlebarsjs.com/)
  - Pug

### Install

`$ npm install --save express`

Extra Plugins

- body-parser --> Form data parser
- cookie-parse --> decorator of request in `req.cookies`
- multer --> Para MultipartFormData (files, photos)


### Routing



### [HTTP Methonds](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

- #### GET
``` js
  app.get('/', function (req, res) {
    res.send('hello world')
    })
```
  - URL parameters
    - to define parameters, in first argument use `:` before the name of the param
  ``` js
    app.get('user/:id', function (req, res) {
      let id = req.params.id
      res.send('id: '  + id)
      })
  ```
  - you can access params using: `req.params`
- #### POST
  - payload
    - Info to add
    - types
      - When coming from <form> `application/x-www-form-urlencoded`
      - JSON `application/application/json`
      - Files `multipart/form-data`
``` js
  app.post('/user', (req, res) => {
    console.log(req.payload)
    res.send('Post complete ' + req.params.id)
  })
```
- #### PUT

``` js
  app.get('user/:id', function (req, res) {
    let id = res.params.id
    res.send('id: '  + id)
    })
```
- #### DELETE

### REST API


### [Express Generator](https://expressjs.com/en/starter/generator.html)

- install `$ npm i -g express-generator`
- use `$ express <option> <project-name>`

### [Nodemon](https://nodemon.io/)
Features
- Autorefresh on save
- Debug in chrome

- Install `$ npm i -g nodemon`
- Use

### Mongooose with Express

- Using MVC framework



[x] tabla de usuarios
[ ] pagina registro de usuario
[ ] pagina de detalle de usuario
[ ] pagina login
[ ] pagina de detalle de usuarios con posibilidad de edición cuando se tiene sesión
# twitter-demo
