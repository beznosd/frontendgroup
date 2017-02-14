 'use strict';

  // Калькулятор с испольщованием switch и функций

  var a = +prompt('First number');
  var sign = prompt('Sign');
  var b = +prompt('Second number');
  
  switch (sign) {
    case '+':
      var result = sum(a, b);
      break;

    case '-':  
      var result = sub(a, b);
      break;

    case '/':
      var result = div(a, b);
      break

    case '*':
      var result = mul(a, b);
      break

    default:
      var result = 'Error!';
  }

  alert(result);

  function sum(a, b) {
    return a + b;
  }

  function div(a, b) {
    return a / b;
  }

  function mul(a, b) {
    return a * b;
  }

  function sub(a, b) {
    return a - b;
  }

  // Возведение числа в квадрат

  function square(a) {
    return a * a;
  }
  
  console.log(square(4));

  // Возведение числа в степень
  // num - число
  // exp - степень
  function pow(num, exp) {
    var res = num;
    for (var i = 1; i < exp; i++) {
      res = res * num;
    }
    return res;
  }  

  console.log(pow(2, 3));