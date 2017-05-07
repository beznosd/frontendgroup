$(document).ready(function(){
			$('ul.accordion li > p').click(function(){
				if(!$(this).hasClass('active')){	
					$('ul.accordion li > p').removeClass('active').next('div').slideUp(); 
					$(this).addClass('active');	
					$(this).next('div').slideDown(200);	
				} else {	
					$(this).removeClass('active').next('div').slideUp();	
				}
			});
		});

/*Slider*/
var slideIndex = 1;
var n = 1;


function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex -= n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('sl__slide');
	var dots = document.getElementsByClassName('.dot');

	if(n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace('active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += 'active';
}

showSlides(slideIndex);



 