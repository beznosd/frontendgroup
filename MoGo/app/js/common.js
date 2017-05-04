$(document).ready(function(){
  $('.bxslider').bxSlider({
  	auto: true,
  	pager: false

  });

  $('.accordion-title + .accordion-text').not(':first').hide();

	$('.accordion-title').click(function() {
		var accordionText = $(this).next('.accordion-text'),
		arrow = $(this).children('.arrow');
		accordion = $(this).closest('.accordion'),
		titleIndex = $(this).index();
		img = $('.service-img');
		
		if (accordionText.is(':visible')) {
			accordionText.slideUp();
			arrow.toggleClass('transformed');
		} else {
			accordion.find('.accordion-text').slideUp();
			accordionText.slideDown();
			arrow.toggleClass('transformed');
		}

		if (titleIndex === 0) {
			$(img[0]).addClass('active').siblings().removeClass('active');
		} else if (titleIndex === 2) {
			$(img[1]).addClass('active').siblings().removeClass('active');
		} else if (titleIndex === 4) {
			$(img[2]).addClass('active').siblings().removeClass('active');
		}

	});

});