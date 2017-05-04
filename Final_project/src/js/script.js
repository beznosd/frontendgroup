$('.carousel').carousel()
/*Accordion*/
$('.accordion__item:eq(0) .accordion__title').addClass('is-active').next().slideDown();

$('.accordion__title').click(function(e) {
  var $this = $(this);
  var dropDown = $this.closest('.accordion__item').find('.accordion__content');

  $this.closest('.accordion').find('.accordion__content').slideUp(400);

  if ($this.hasClass('is-active')) {
    $this.removeClass('is-active');
  } else {
    $this.closest('.accordion').find('.accordion__title.is-active').removeClass('is-active');
    $this.addClass('is-active');
  }

  dropDown.stop(false, true).slideToggle();
  e.preventDefault();
});