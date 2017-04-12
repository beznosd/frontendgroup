var templateScript = $('#row').html();
var btn = document.querySelector('button');

btn.onclick = function(e) {
	e.preventDefault();
	var form = document.forms.randomuser;
	var sum = form.elements.sum.value;
	var preloader = document.querySelector('.loader')
	var table = document.querySelector('table')
	
	fetch( 'https://randomuser.me/api/?results=' + sum, {
      method: 'GET',
    }).then(function(response) {
    	preloader.classList.toggle('hidden');
    	form.classList.toggle('hidden');
      return response.json();
    }).then(function(data) {
    	table.classList.toggle('hidden');
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





		