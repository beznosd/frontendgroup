$(document).ready(function(){
			$('ul.accordion li > p').click(function(){
				if(!$(this).hasClass('active')){	//если "кликнутый" пункт неактивный:
					$('ul.accordion li > p').removeClass('active').next('div').slideUp(); //делаем неактивными все пункты и скрываем все блоки
					$(this).addClass('active');	//активируем "кликнутый" пункт
					$(this).next('div').slideDown(200);	//раскрываем следующий за ним блок с описанием
				} else {	//иначе:
					$(this).removeClass('active').next('div').slideUp();	//скрываем данный пункт
				}
			});
		});

/*Slider*/
var slideIndex = 1;


function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
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



 