
function sendTweet () {
  let user = document.querySelector('#tweet-user').value
  let text = document.querySelector('#tweet-text').value
  let body = JSON.stringify(
    {
      user,
      text
    }
  )
  fetch('http://soymelisa.pagekite.me/api/tweets', {
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
