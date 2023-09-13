// elements

let imageContainer = document.querySelector('.image')
let input = document.querySelector('input[type=\'text\']')
let submitButton = document.querySelector('button[type=\'submit\']')
let container = document.querySelector('.container')
let labelErr = document.querySelector('.error-label')
let thanksContainer = document.querySelector('.thanks')

// variables for app

let regex = /^(\w+)@(gmail|hotmail|company|loremcompany).(com|net|org)+$/ig

// submit buttom
submitButton.addEventListener('click', _=> {
  // test email
    if(regex.test(input.value)){
      container.style.display = `none`
      thanksContainer.classList.remove('none')
    }
  // error state
    else {
      input.style.borderColor = `red`
      input.style.color = `red`
      labelErr.style.display = `block`
    }
})

// for improvement
window.addEventListener('keyup', e => {
  if(e.keyCode == 13) {
    submitButton.click()
  }
})

// for restate errors status
window.addEventListener('keyup', _=> {
  input.style.borderColor = `black`
  input.style.color = `black`
  labelErr.style.display = `none`
})


// for responsive
window.addEventListener('resize', () => {
  if(window.innerWidth < 375) {
    imageContainer.firstElementChild.src = "./assets/images/illustration-sign-up-mobile.svg"
  }
  else {
    imageContainer.firstElementChild.src = "./assets/images/illustration-sign-up-desktop.svg"
  }
})

window.addEventListener('load', () => {
  if(window.innerWidth < 375) {
    imageContainer.firstElementChild.src = "./assets/images/illustration-sign-up-mobile.svg"
  }
  else {
    imageContainer.firstElementChild.src = "./assets/images/illustration-sign-up-desktop.svg"
  }
})