const form = document.getElementById('form')
const username = document.getElementById('Username')
const email = document.getElementById('Email')
const password = document.getElementById('Password')
const password2 = document.getElementById('Password2')

// Show input error message
function showError(input,message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show success meassage
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

//Check email is valid
// function isValidEmail(email) {
    
// }

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // Check required fields
  function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input,`${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    });
  }
  // Check input length
  function checkLength(input, min,max) {
    if (input.value.length < min) {
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max) {
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
  }
  // Get fieldname
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
  }
// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault()

   checkRequired([username,email,password,password2])
   checkLength(username, 3, 15)
   checkLength(password, 6, 25)
})