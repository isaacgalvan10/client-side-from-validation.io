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
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName);
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    setErrorFor(email);
    email.placeholder = '';
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password);
  } else {
    setSuccessFor(password);
  }


  function setErrorFor(input) {
    var formControll = input.parentElement;

    //add error class
    formControll.className = 'form-control error';
  }

  function setSuccessFor(input) {
    var formControll = input.parentElement;

    //add error class
    formControll.className = 'form-control success';
  }
}