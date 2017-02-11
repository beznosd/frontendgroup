'use strict';
/* First Ex. 
var s=0;
var ln='';
    for (var j = 0; j < 10; j++,ln+=j.toString()+'  |  ', s+=j );

    console.log( ln ); 
    
    console.log('Sum:' + ' ' +s);
*/


/* Second Ex.
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

