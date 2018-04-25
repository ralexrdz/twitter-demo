let token = ""


function sendTweet () {
  console.log(window.sessionStorage.accessToken)
  let text = document.querySelector('#tweet-text').value
  let body = JSON.stringify(
    {
      text
    }
  )
  fetch('http://127.0.0.1:3000/api/tweets', {
    method: 'POST',
    body: body,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.sessionStorage.accessToken}`
    }
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
  fetch('http://127.0.0.1:3000/api/users', {
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
  fetch('http://127.0.0.1:3000/api/users/login', {
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
      window.sessionStorage.accessToken = data.token
      // guardar el token
    })
  })
}
