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

