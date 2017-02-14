'use strict';

/* Expanenta 
function pow(num, exp){
	var result=num;
	for (var i = 0;i < exp; i++) {
	 result*= num;
	}
	return result;
}
console.log(pow(3,3))
*/


/* Calculator
function sum(a, b){
	var sum= +a + +b;
	return sum;
} 

function sub(a, b){
	var sub= +a - +b;
	return sub;
} 

function mul(a, b){
	var mul= +a * +b;
	return mul;
} 

function div(a, b){
	var div= +a / +b;
	return div;
} 

var a=prompt('First number');
var b=prompt('Second number');
var sign=prompt('Sign');

switch(sign){
  case '+':
	var result = sum(a, b);
	break;

  case '-':
	var sub = sub(a, b);
	break;

  case '*':
	var mul = mul(a, b);
	break;
  
  case '/':
	var div = div(a, b);
	break;

  default:
	var result = 'Error!';
}
alert(result);
*/

/* CW 2
function getFulName(firstName, lastName){
	var fullName= firstName + ' ' + lastName;
	return fullName;
}

var x= getFulName('Vasya', 'Pupkin');
alert(x); */


/*
function sum(a, b){
	var result =a+b; 
	return result;
}

alert(sum(2,5));
*/



/* CW 1         
var sum=0;
while(true){
	var num=prompt('Введите число');
	if (num) {
		sum += +num;
	}else {
		alert(sum);
		break;
	}
	} */






/* First Ex. 
var s=0;
var ln='';
    for (var j = 0; j < 10; j++,ln+=j.toString()+'  |  ', s+=j );

    console.log( ln ); 
    
    console.log('Sum:' + ' ' +s);
*/


  /*Second Ex.
var str='';
var ln='';
for (var j=1; j<10;j++){
	console.log("For" + ' ' + j);
	ln='';
    str=j;
    for (var i = 0; i < 10;i+=1, ln+=(i*str).toString()+'  |  ');
	  console.log(ln);
} */




/* Калькулятор 
var number = prompt('Введите число');

var number2 = prompt('Введите второе число');

var znak = prompt('Введите знак');

if (znak == '+'){
	alert(+number + +number2);
}
if (znak == '-'){
	alert(+number - +num  ber2);
}
 if (znak == '*'){
	alert(+number * +number2);
}
if (znak == '/'){
	alert(+number / +number2);
}
*/

/* Сравнение чисел
var number = prompt('Введите число');

 if (number > 0){
  alert('Число больше 0');
}else if(number <0){
  alert('Число меньше 0');
} else{
	alert('Число равно 0')
} */



/* Админ панель

var username = prompt('Ты кто?');

if (username == 'Админ') {

  var pass = prompt('Пароль?');

  if (pass == 'Чёрный Властелин') {
    alert('Добро пожаловать!');
  } else if (pass == null) { 
    alert('Вход отменён');
  } else {
    alert('Пароль неверен');
  }
}
if (username == 0) {
	alert('Вход отменен');
} else {
	alert('Я вас не знаю')
}
*/

