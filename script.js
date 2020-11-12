var form = document.getElementById('form');
var firstName = document.getElementById('name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  var firstNameValue = firstName.value.trim();
  var lastNameValue = lastName.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if (firstNameValue === '') {
    setErrorFor(firstName);
    console.log('working');
  } else {
  }

  function setErrorFor(input) {
    var formControll = input.parentElement;


    //add error class
    formControll.className = 'form-control error';
  }
}