'use strict';

if (2*4 === 8) {
    console.log('right!');   
  } else {
    console.log('wrong!');
  }

let num = 50;
(num === 50) ? console.log('right!') : console.log('wrong!');

switch (num) {
  case num < 49:          // Почему-то выдаёт "Error"
    console.log('more');
    break;
  case 49:
    console.log('Near');
    break;
  case 51:
      console.log('Near');
      break;
  case num > 51:          // Почему-то выдаёт "Error"
    console.log('less');
    break;
  case 50:
      console.log('finaly... You guessed! ' + ';)');
      break;
  default:
    console.log('error!');
    break;
}

// Цыклы...
// let number = 50;

// while (number < 55 ) {
//   console.log(number);
//   number++;  
// }

// do {
//   console.log(number);
//   number++;
// }
// while (number < 55);



// let n = 50;

// for(n; n<55; n++) {
//   if (n === 51) {
//     continue;
//   }
//   if ( n === 54) {
//     break;
//   }
//   console.log(n);
// }