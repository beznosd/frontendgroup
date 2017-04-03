var success = document.querySelector('.success');
var error = document.querySelector('.error');

function showNatification(obj) {
	var hiddenDiv = document.createElement('div');
	hiddenDiv.textContent = obj.text;
	document.body.appendChild(hiddenDiv);
	if(obj.bottom) {
		hiddenDiv.style.bottom = 0;
	} else {
		hiddenDiv.style.top = 0;
	}
	
	if (obj.type === 'success') {
		hiddenDiv.classList.add("header");
	} else {
		hiddenDiv.classList.add("footer");
	}	

	
	setTimeout({hiddenDiv.parentNode.removeChild(hiddenDiv);
	}, obj.time);
}


success.onclick = function() {
	showNatification({
		type: 'success',
		text: 'Some message! Some message!',
		bottom: true,
		time: 1000
	});
}
error.onclick = function() {
	showNatification({
		type: 'error',
		text: 'Text of our Notification',
		bottom: false,
		time: 3000
	});
}
