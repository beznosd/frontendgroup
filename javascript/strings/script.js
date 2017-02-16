/* Finding the last symbol in project */

function getLastChar(string) {
  return string[string.value - 1];
}

console.log(getLastChar('Vasya Pupkin'));

/* Checking email */

var email1 = 'email@example.ru';
var email2 = 'ksjhdfk.sd'

var isValidEmail1 = isValidEmail('email@wxample.com'); // => true
var isValidEmail2 = isValidEmail(email2); // => false

console.log(isValidEmail1, isValidEmail2)

function isValidEmail(email) {
  var dogPosition = email.indexOf('@');
  var dotPosition = email.indexOf('.');

  if (dogPosition === -1 || dotPosition === -1) {
    return false;
  }

  return true;
}
