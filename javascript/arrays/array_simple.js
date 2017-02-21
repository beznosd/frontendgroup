/*
* Arrays
*/

var a = 'str';

var array = [a, 234, "parrot", true];

// create array from five elements
var a = [1, 2, 3, 4, 5];

// out put array
console.log(a);

// array from 12 elements
var months = ["September", "October", "November", "December", "January", "Fabruary", "March", "April", "May", "June", "Jull", "August"];

console.log(months[months.length - 1]);

/*
* Create arrays with constructor
*/

var a = Array();

var b = Array(1, 2, 3, 4, 5, 6);

document.write(b);

document.write("<hr />");

var c = Array(10);

document.write(c);

document.write("<hr />");

/*
* Change elements in array
*/

var arr = [];

arr[0] = 2;
arr[1] = 5;
arr[2] = 12;
arr[3] = 8;
arr[4] = 23;

document.write("Содержимое массива: " + arr);

arr[4] = "Four";
arr[10] = "Ten";

document.write("<br/>");

document.write(arr);

document.write("<hr />");

/*
* Array length
*/

var array = ['h', 'e', 'l', 'l', 'o'];

document.write("<b>Length</b> of array [" + array + "] равна = " + array.length);

document.write("<br/><br/>");

// + 2
array.length = 7;

for (var i = 0; i < array.length; i++) {
document.write(array[i] + "<br />");
}

document.write("<br/>");

// All elemnts will lost
array.length = 2;

for (var i = 0; i < array.length; i++) {
document.write(array[i] + "<br />");
}

// length of array = index of last + 1
arr = [1, 2, 3];
arr[10] = 'value';
document.write(arr.length);

document.write("<hr />");

/*
* Matrix, 2D Array -> Chess
*/

var table = [];

for (var i = 0; i < 8; i++) { 
table[i] = [];            
}

// initialize 
for (var row = 0; row < 8; row++) {

for (var col = 0; col < 8; col++) {
    if ( (row + col) % 2 ) {
        table[row][col] = "<img src='images/1.jpg' width='50' height='50'/>";
    } else {
        table[row][col] = "<img src='images/2.jpg' width='50' height='50'/>";
    }
}

}


for (var row = 0; row < table.length; row++) {
for (var col = 0; col < table[row].length; col++) {
    document.write(table[row][col]);
}
document.write("<br/>");
}

document.write('<br/>');

for (var row = 0; row < table.length; row++) {
for (var col = 0; col < table[row].length; col++) {
    document.write(table[row][col]);
}
document.write("<br/>");
}

// function wich return last element of array

function returnLastEl(arr) {
return arr[arr.length - 1];
}
var arr = [1, 2, 3, 4, 5];
console.log( returnLastEl(arr) );


// sum of elements in array

function sumOfArrElements(arr) {
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    // i = 0
    // i = 1
    // i = 2
    // ...
    sum = sum + arr[i];
}
return sum;
}

var numArr = [1, 2, 4, 5, 6];
var sum = sumOfArrElements(numArr);
console.log(sum);