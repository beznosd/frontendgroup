var playMusic = function() {
  document.body.innerHTML = 
    '<audio autoplay>\
       <source src="music.mp3">\
    </audio>\
    <img src="tadam.jpg" />';
};

/*
* setInterval
*/

var i = 10;

var timer = setInterval(function() {
  document.body.innerHTML = i;
  i--;
  if (i == 0) {
    clearInterval(timer);
    playMusic();
  }
}, 1000);

/*
* setTimeout
*/

// setTimeout(playMusic, 1000);