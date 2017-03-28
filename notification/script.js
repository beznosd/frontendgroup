$('#success').click(function() {
	$('#message-top')
		.html("Some message!")
		.css("color","black")
		.css("text-align", "center")
		.parent()
		.css("background-color", "green")
		.css("position", "absolute")
		.css("top", "0")
		.css("left", "0")
		.width(1400)
		.height(80)
	});

$('#success').hover(function() {
					$(this);
					setTimeout(2000);
});


$('#error').click(function() {
	$('#message-bottom')
		.html("Text of our notification!")
		.css("color", "black")
		.css("text-align", "center")
		.parent()
		.css("background-color", "red")
		.css("position", "absolute")
		.css("bottom", "0")
		.css("left", "0")
		.width(1400)
		.height(80)
	});

$('#success').hover(function() {
					$(this);
					setTimeout(2000);
});			