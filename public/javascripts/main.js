let token = ""


function sendTweet () {
  if (token === "") alert('necesitas hacer login')
  let text = document.querySelector('#tweet-text').value
  let body = JSON.stringify(
    {
      text
    }
  )
  fetch('http://localhost:3000/api/tweets', {
    method: 'POST',
    body: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: "include"
  })
  .then(function (res) {
    console.log(res)
    res.json()
    .then(function (data) {
      document.location.href = '/'
    })
  })
}

function signup() {
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value
  let body = JSON.stringify(
    {
      email,
      password
    }
  )
  console.log('signup')
  fetch('http://localhost:3000/api/users', {
    method: 'POST',
    body: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(function (res) {
    res.json()
    .then(function (data) {
      document.location.href = '/login'
    })
  })
}


function login() {
  let email = document.querySelector('#email').value
  let password = document.querySelector('#password').value
  let body = JSON.stringify(
    {
      email,
      password
    }
  )
  fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    body: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(function (res) {
    console.log(res.headers.get('Set-Cookie'))
    res.json()
    .then(function (data) {
      token = data.token
      // guardar el token
    })
  })
}
