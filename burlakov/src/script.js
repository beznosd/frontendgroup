$(document).ready (function () {
       $('.collapse').on('shown.bs.collapse', function () {
          	$(this).parent().find('.glyphicon-menu-down').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up')
       }).on('hidden.bs.collapse', function () {
          	$(this).parent().find('.glyphicon-menu-up').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down')
       });
});