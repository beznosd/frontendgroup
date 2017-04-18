var btn_prev = document.querySelector('.button-back');
var btn_next = document.querySelector('.button-forward');
var images = document.querySelectorAll('img');
var i = 0;

btn_prev.onclick = function() {

	images[i].style.display = 'none';
	i--;

	if(i < 0) {
		images[i] = images.length - 1;
	}

	images[i].style.display = 'block';
}

btn_next.onclick = function() {
	images[i].style.display = 'none';
	i++;

	if(i >= images.length) {
		images[i] = 0;
	}

	images[i].style.display = 'block';
}