// Animated menu scroll

document.querySelector('.store').onclick = scroll;
document.querySelector('.style').onclick = scroll;
document.querySelector('.history').onclick = scroll;
document.querySelector('.designer').onclick = scroll;

function scroll() {
	// var wScroll = window.pageYOffset;
	var menuItems = document.querySelectorAll('nav span');
	var targetTop = document.getElementById(this.getAttribute('class')).offsetTop;

	[].forEach.call(menuItems, function(item){
		item.onclick = null;
	});

	if (window.pageYOffset < targetTop) {
		var iBottom = setInterval(function() {
			var documentHeight = document.documentElement.scrollHeight;
			var wBottomScroll = window.pageYOffset + document.documentElement.clientHeight;
		
			// get the element
			if ( window.pageYOffset >= targetTop || wBottomScroll === documentHeight) {
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				});
				clearInterval(iBottom);
				return false;
			}

			window.scrollBy(0, 30);
		}, 15);
	} else {
		var iTop = setInterval(function(){
			if ( window.pageYOffset <= targetTop || window.pageYOffset === 0) {
				[].forEach.call(menuItems, function(item){
					item.onclick = scroll;
				});
				clearInterval(iTop);
				return false;
			}

			window.scrollBy(0, -30);
		}, 15);
	}
}


/*else {
		var iTop = setInterval(function() {
			if ( (window.pageYOffset <= targetTop) ) {
				clearInterval(iTop);
				return false;
			}

			// get the top of the page
			if (window.pageYOffset === 0) {
				clearInterval(iTop);
				return false;
			}

			window.scrollBy(0, -30);
		}, 15);
	}*/



// Top scroller

document.querySelector('.scroller').onclick = function() {
	var iTop = setInterval(function() {
		
		// get the top of the page
		if (window.pageYOffset === 0) {
			clearInterval(iTop);
			return false;
		}

		window.scrollBy(0, -100);
	}, 15);
}