// WHILE

// var i = 0;

// while (i < 5) {
//   console.log(++i);
// }

// if (i > 0) {
//  console.log(i);
// }

// по возрастанию

// var i = 1;
// while( i <= 5 ) {
//  console.log(i++);
// }

// то же, только при использовании префиксной формы

// var i = 0;
// while( i < 5 ) {
//  console.log(++i);
// }

// DO WHILE

// i = 0;
// do {
//  console.log(i);
//  i--;
// } while (i >= 0);

// FOR

// for( var i = 0; i <= 10; i++) {
//  console.log(i)
// }


// SOME TASKS


// for => while

// for (var i = 0; i < 3; i++) {
//   console.log('number ' + i + '!');
// }

// var i = 0;
// while (i < 3) {
//  console.log('number ' + i + '!');
//  i++;
// }



// BREAK, CONTINUE

// for( var i = 0; i < 5; i++ ) {
//  if (i == 3) {
//    break;
//  }
//  console.log(i);
// }


// НЕЧЕНТНЫЕ, ЧЕТНЫЕ

// 1 вариант

// var even = 0; // четные
// var odd = 0; // нечетные
// for( var i = 1; i <= 10; i++ ) {
//  if (i % 2 == 0) {
//    even += i;
//  }
//  if (i % 2) {
//    odd += i;
//  }
// }
// console.log('Summ odd: ' + odd);
// console.log('Summ even: ' + even);

// // 2 вариант

// var even = 0; // четные
// var odd = 0; // нечетные
// for( var i = 1; i <= 10; i++ ) {
//  if (i % 2 == 0) {
//    even += i;
//    continue;
//  } else {
//    odd += i;
//  }
// }
// console.log('Summ odd: ' + odd);
// console.log('Summ even: ' + even);

// 3 вариант

var even = 0; // четные
var odd = 0; // нечетные
for( var i = 1; i <= 10; i++ ) {
  if (i % 2 == 0) {
    even += i;
    continue;
  }
  odd += i;
}
console.log('Summ odd: ' + odd);
console.log('Summ even: ' + even);
