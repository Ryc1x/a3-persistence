window.onload = function () {
    const loginBtn = document.querySelector('#login-btn')
    loginBtn.onclick = handleLogin
    console.log('this javascript file was successfully loaded.')
}

/**
 * Handle login request
 */
const handleLogin = function (e) {
    e.preventDefault()

    const form = $('#login-form')
    const username = form.find('#input-username').val()
    const password = form.find('#input-password').val()

    json = {
        username: username,
        password: password
    }
    body = JSON.stringify(json)

    fetch('/login', {
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        body: body
    }).then(function (response) {
        console.log(response)
        if (response.redirected){
            window.location = response.url
        }
    })
}