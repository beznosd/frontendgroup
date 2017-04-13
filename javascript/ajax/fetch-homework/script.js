var button = document.querySelector('button');

button.addEventListener('click', function(evt) {
  evt.preventDefault();

  var num = +document.querySelector('input').value;
  
  if (!num) {
    alert('Только числа');
    return;
  }

  fetch('https://randomuser.me/api/?results=' + num, {
    method: 'get'
  }).then(function(response) {
    return response.json();
  }).then(function(obj) {

    var html = '<ul>';
    obj.results.forEach(function(user) {
      html += '<li><img src="' + user.picture.thumbnail + '"></li>';
    });
    html += '</ul>';

    document.querySelector('.users').innerHTML = html;
  });
});























