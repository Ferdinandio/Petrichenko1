let btn = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let body = document.querySelector('#body');
let link = document.querySelector('a');

// btn[0].onklick = function() {
//   alert('You have pushed first button!');
// };

// btn[0].addEventListener('click', function() {
//   alert('You have pushed "1" button!');
//   alert('You have pushed "OK" button!');
// });

// btn[0].addEventListener('mouseenter', function() {
//   alert('You moved coursor on "1" button!');
// });

// btn[0].addEventListener('click', function(event) {
//   let target = event.target;
//   target.style.display = 'none';
// });

// body.addEventListener('click', function(event) {
//   console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);  
// });

// btn[0].addEventListener('click', function(event) {
//   console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);  
// });

// link.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log('произошло событие: ' + event.type + ' на элементе ' + event.target);  
// });

btn.forEach(function(item) {
  item.addEventListener('mouseleave', function() {
    console.log('наведи обратно!');
  });
});