'use strict';

function sum(a, b) {
  return a + b;
}

function square(a) {
  return a * a;
}

function pow(num, n) {
  var result = num;
  for (var i = 1; i < n; i++) {
    result *= num;
  }
  return result;
}

function max(a, b) {
  if (a > b) {
    return a
  }
  return b;
}

function min(a, b) {
  if (a < b) {
    return a
  }
  return b;
}

function summEven(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += arr[i];
    }
  }
  return result;
}

function summOdd(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result += arr[i];
    }
  }
  return result;
}

function substrCount(str, substr) {
  var pos = 0;
  for (var i = 0; i < str.length; i++) {
    var foundPos = str.indexOf(substr, pos);
    if (foundPos === -1) break;
    pos = foundPos + 1;
  }
  return i;
}

