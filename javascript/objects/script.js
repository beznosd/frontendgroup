'use strict';

/*
    Objects
*/

var object = {
  a: 1, 
  b: 2,
  'some property': 'value'
};

console.log(object['some property']);

var person = {
  firstName: "Jim",
  lastName: "Rainbow",
  age: 30,
  job: {
    position: 'Web Developer',
    status: 'Senior'
  }
};

document.write("<p>" + person.firstName + " " + person.lastName + '</p>');

person.age = 25;
document.write("<p>Age: " + person.age + " years old.");

document.write('<p>Postion: ' + person.job.position + '</p>');

document.write('<br>');


// Создаем простой объект car
// В нем должны быть свойства

// количество колес 4, 
// количество дверей 5, 
// макс. скорость 220, 
// корбка передачь ручная (gearbox: handle),

var car  = {
  wheels: 4,
  doors: 5,
  maxSpeed: 220,
  gearbox: 'handle'
};


/*
* Constructor object
*/

var point = {};

point.x = 10;
point.y = 25;

point.getCoords = function() {
    document.write("<p>x = " + point.x, " y = " + point.y);
};

point.setCoords = function(x, y) {
  point.x = x;
  point.y = y;
};

point.getCoords(); // x = 10, y = 25
point.setCoords(20, 25);
point.getCoords(); // x = 20, y = 25


/*
* Inline object
*/

var human = {
    firstName: "Alex",
    secondName: "Jazun",
    age: 27,

    job: {
        company: "Microsoft",
        position: "Web Developer",
    }
};

console.log(human.job.position);

/*
* Add properties outside
*/

var human = {};

human.firstName = "Alex";
human.secondName = "Jazun";
human.age = 27;

// Creating of inline object
human.job = {};

human.job.company = "Microsoft";
human.job.position = "Web Developer";


/*
* Methods outside
*/

var builder = {};

builder.createRoof = function () {
    document.write("<img src='Images/Roof.gif'/><br/>");
};

builder.createSecondFloor = function () {
    document.write("<img src='Images/SecondFloor.gif'/><br/>");
};

builder.createBasement = function () {
    document.write("<img src='Images/Basement.gif'/><br/>");
};

builder.createFirstFloor = function () {
    document.write("<img src='Images/FirstFloor.gif'/><br/>");
};


builder.createRoof();
builder.createSecondFloor();
builder.createFirstFloor();
builder.createBasement();



for (var i = 0; i < 7; i++) {
    document.write('<hr/>');
}

/*
* For in
*/


var house = {
    roof: "<img src='Images/Roof.gif'/><br/>",
    secondFloor: "<img src='Images/SecondFloor.gif'/><br/>",
    firstFloor: "<img src='Images/FirstFloor.gif'/><br/>",
    basement: "<img src='Images/Basement.gif'/><br/>",
    address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
}

// go through each property
for (prop in house) {
   document.write(house[prop]);
}






// Вывести количество свойств в объекте

// document.write(Object.keys(car).length);


/*
* delete
*/


// Удаляем все свойства объекта

var menu = {
  width: 300,
  height: 200,
  title: "Menu"
};

delete menu.width;

var counter = 0;
for (var key in menu) {
  delete menu[key];
}

alert( "Всего свойств: " + counter );


// Проверяем пуст ли объект

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty(obj));


// вариант 2
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}



// считаем сумму свойств

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};


var sum = 0;
for (var name in salaries) {
    sum += salaries[name];
}

alert( sum );

// Максимальная зарплата

var max = 0;
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
  }
}

document.write('Максимальная зарплата ' + max); 


/* Умножаем числа на 2 */

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
}



/* Объект - ссылочный тип данных */

var user = { name: 'Вася' };

var admin = user;

var manager = user;

admin.name = 'Петя'; // поменяли данные через admin

document.write(manager.name); // 'Петя', изменения видны в user


// Копирования объектов

var car1  = {
    wheels: 4,
    doors: 5,
    maxSpeed: 220,
    gearbox: 'handle'
}

var car2 = {}; // new empty object

// copy
for (var key in car1) {
  car2[key] = car1[key];
}

alert( car.wheels ); // по-прежнему "Вася"