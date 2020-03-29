// let options = {
//   width: 1024,
//   height: 1024,
//   name: 'test'
// };

// console.log(options.name);

// options.bool = false;
// options.color = {
//   border: 'black',
//   bg: 'green'
// };

// delete options.color.border;

// console.log(options);

// for (let key in options) {
//   console.log('Property ' + key + ' contains value ' + options[key]);  
// }

// console.log(Object.keys(options).length);

//  Arrays!!!


// let arr = [1, 2, 3, 4, 5];
// arr[99] = 99;
// console.log(arr);
// console.log(arr.length); 
// !!! length возвращает последний индекс плюс 1, а не количество элементов в массиве !!!


// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('1');
// arr.unshift(null);
// arr.reverse();

// console.log(arr);

// let arr = ['first', 'second', 'third', 'fourth', 'fifth'];

// arr.forEach(function(item, i, mass) {
//   console.log('Whole array: (' + mass + ') contains element ' + item + ' with number: ' + i);
// });

// let mass = [5, 76, 38, 47, 9];

// for (key of mass) {
//   console.log(key);
// }


// let ans = prompt('',''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);



// let arr = ['j', 'o', 'i', 'n', '!'];
// let i = arr.join(', ');

// console.log(i);

// let arr = ['j', 'o', 'i', 'n', '!'];
// let i = arr.sort();

// console.log(arr);

// let arr = [7, 38, 78, 96, 3];    // сортирует как строки!!!!
// let i = arr.sort();

// console.log(arr);

// let arr = [7, 38, 78, 96, 3];
// let i = arr.sort(compareNum);

// function compareNum(a, b) {         // нужна callback функция, чтобы сортировать числа!!!
//   return a-b;
// }

// console.log(arr);


// !!! ООП !!!

// let soldier = {
//   health: 400,
//   armor: 100
// };

// let john = {
//   health: 200
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

// let soldier = {
//   helth: 400,
//   armor: 100
// };

// let john = {
//   health: 200
// };

// john.__proto__ = soldier;    // !!! присваиваем солдата как прототип джона !!!

// console.log(john);
// console.log(john.armor);
