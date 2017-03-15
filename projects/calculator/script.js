(function(){
  'use strict';
  
  // Shortcut to get element
  var el = function(element) {
    if (element[0] === '#') {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element);
  };

  var viewer = el('#viewer');
  var equals = el('#equals');
  var nums = el('.num');
  var ops = el('.ops');
  var theNum = ''; // Current number
  var oldNum = ''; // First number
  var resultNum, operator;

  // When: Number is clicked. Get the current number selected
  var setNum = function() {
    if (resultNum) {
      theNum = this.getAttribute('data-num');
      resultNum = '';
    } else {
      theNum += this.getAttribute('data-num');
    }
  
    viewer.innerHTML = theNum;
  };

  // When: Operator is clicked
  var moveNum = function() {
    oldNum = theNum;
    theNum = '';
    operator = this.getAttribute('data-ops');

    equals.setAttribute('data-result', ''); // reset result
  };

  // When: Equals is clicked. Calculate result
  var displayNum = function() {
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    switch (operator) {
      case 'plus':
        resultNum = oldNum + theNum;
        break;

      case 'minus':
        resultNum = oldNum - theNum;
        break;

      case 'times':
        resultNum = oldNum * theNum;
        break;

      case 'divided by':
        resultNum = oldNum / theNum;
        break;

      default:
        resultNum = theNum;
    }

    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        resultNum = 'You broke it';
      } else {
        resultNum = 'Look at what you have done!';
        el('#calculator').classList.add('broken');
        el('#reset').classList.add('show');
      }
    }

    // show results
    viewer.innerHTML = resultNum;
    equals.setAttribute('data-result', resultNum);

    // reset
    oldNum = 0;
    theNum = resultNum;
  }

  var clearAll = function() {
    oldNum = '';
    theNum = '';
    viewer.innerHTML = '0';
    equals.setAttribute('data-result', resultNum);
  }

  /*
    The click events
  */

  // Add click events to numbers
  for (var i = 0; i < nums.length; i++) {
    nums[i].onclick = setNum;
  }

  // Add click events to numbers
  for (var i = 0; i < ops.length; i++) {
    ops[i].onclick = moveNum;
  }

  equals.onclick = displayNum;

  el('#clear').onclick = clearAll;

  el('#reset').onclick = function() {
    window.location = window.location;
  }
  
}());