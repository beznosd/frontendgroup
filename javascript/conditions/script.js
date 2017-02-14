var name = prompt('Your name?');

if (name === 'Admin') {

  var pass = prompt('Your pass');

  if (pass === 'Black lord') {
    alert('Welcome Lord!');
  } else if (name === null) {
  alert('Enter canceled');
  } else {
    alert('Password is invalid');
  }

} else if (name === null) {
  alert('Enter canceled');
} else {
  alert('Name is invalid');
}

var num1 = prompt('Type first value', '');
var operator = prompt('Type operator', '');
var num2 = prompt('Type second value', '');

switch( operator ) {
  case '+':
    alert( +num1 + +num2 );
    break;
  case '-':
    alert( +num1 - +num2 );
    break;
  case '*':
    alert( +num1 * +num2 );
    break;
  case '/':
    alert( +num1 / +num2 );
    break;
  default:
    alert('Incorrect operator, type only: \'+\' \'-\' \'/\' \'*\'');
}

var browser = prompt('Ваш браузер?');

switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

