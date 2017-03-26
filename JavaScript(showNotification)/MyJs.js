var success = document.querySelector('.success');
var error = document.querySelector('.error');

function showNatification(obj) {
	obj.time = obj.time || 2000;
	if(obj.type === 'success') {
		if( $('div').hasClass('footer') ) $('div').removeClass('footer');
		$('div').addClass('header');
		$('div').text(obj.text);

		setTimeout(funcSuccess, obj.time);
		
	} else { 
		if( $('div').hasClass('header')) $('div').removeClass('header');
		$('div').addClass('footer');
		$('div').text(obj.text);

		setTimeout(funcError, obj.time);
	}
}

function funcSuccess() {
	$('div').removeClass('header');
	$('div').text('');
}

function funcError() {
	$('div').removeClass('footer');
	$('div').text('');		
}

success.onclick = function() {
	showNatification({
		type: 'success',
		text: 'Some message! Some message!',
		// bottom: false,
		// time: 1000
	});
}
error.onclick = function() {
	showNatification({
		type: 'error',
		text: 'Text of our Notification',
		// bottom: true,
		// time: 3000
	});
}
