
function sendTweet () {
  let user = document.querySelector('#tweet-user').value
  let text = document.querySelector('#tweet-text').value
  let body = JSON.stringify(
    {
      user,
      text
    }
  )
  fetch('http://localhost:3000/api/tweets', {
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


function signup() {
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
    res.json()
    .then(function (data) {

      // guardar el token
    })
  })
}
