var templateScript = $('#row').html();
var btn = document.querySelector('button');

btn.onclick = function(e) {
	e.preventDefault();
	var form = document.forms.randomuser;
	var sum = form.elements.sum.value;
	var preloader = document.querySelector('.loader')
	
	fetch( 'https://randomuser.me/api/?results=' + sum, {
      method: 'GET',
    }).then(function(response) {
    	preloader.classList.toggle('hidden');
      return response.json();
    }).then(function(data) {
    	renderUsers(data)
    	preloader.classList.toggle('hidden');
    });
};




function renderUsers(data) {
	data.results.forEach(
		function(user) {
			var template = Handlebars.compile(templateScript);
			var html = template(user);
			$('table').append(html);
		}
	);
}





		