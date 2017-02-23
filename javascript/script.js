var button = document.querySelector('.button');

var notClicked = true;
button.addEventListener('click', function() {
  if (notClicked) {
    button.style.background = 'red';
    notClicked = false;
  } else {
    button.style.background = 'darksalmon';
    notClicked = true;
  }
});


var getName = function () {
  console.log(this.name);
}

var user = {
  name: 'Vasya',
  getUserName: getName
}

var user2 = {
  name: 'Petya',
  getUserName: getName
}

user.getUserName();
user2.getUserName();

