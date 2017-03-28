$(document).ready(function(){

	'use strict';

	var success = $("#success");
	var error = $('#error');
	var granded = $('div.success__message');
	var denied = $('div.error__message');

	var showNotification = function(settings) {
		if (settings.type === 'success') { 
   			granded.fadeIn(this).delay(settings.time).fadeOut(this);
   			granded.text(settings.text || 'Default');
   			if (settings.bottom === false) {
 				granded.css({"top" : 0});
 				denied.css({"bottom" : 0});
 			} else {
				granded.css({"bottom" : 0});
				denied.css({"top" : 0});		
 			}	
 		} else if (settings.type === 'error') { 
    			denied.fadeIn(this).delay(settings.time).fadeOut(this);
    			denied.text(settings.text || 'Default');
    			if (settings.bottom === false) {
 				granded.css({"bottom" : 0});
 				denied.css({"top" : 0});
 			} else {
				granded.css({"top" : 0});
				denied.css({"bottom" : 0});		
 			}	
 		} else {
 			denied.fadeIn(this).text('CHANGE THE SETTINGS AND RESTART THE PAGE');
 		};    		
 	};
 	
//ПОПЫТКА ПОСТАВИТЬ ДЕФОЛТНЫЕ ДАННЫЕ ВРЕМЕНИ
 		// if (!settings.time) {
   // 			settings.time = 5000;
   // 		};

	success.on('click', function () {
		showNotification ({
			type: 'success',
			text: 'Some message',
			bottom: false,
			time: 1000
		});
	});

	error.on('click', function () {
		showNotification ({
			type: 'error',
			text: 'Some message about error',
			bottom: true,
			time: 3000
		});
	});
});




