// let btn = document.querySelectorAll('button');

// btn.forEach(function(item) {
//   item.addEventListener('click', function() {     // Сам натворил :)
//     setTimeout(sayHello, 2000);
//     function sayHello() {
//       alert('Hello,World!');
//     }
//   });
// });



// timerId = setTimeout(sayHello, 2000);
// clearTimeout(timerId);

// function sayHello() {
//   alert('Hello, World!');
// }

// timerId = setInterval(sayHello, 2000);
// clearTimeout(timerId);

// function sayHello() {
//   console.log('Hello, World!');
// }

// let timerId = setTimeout(function log() {
//   console.log('Это рекурсивный setTimeout!');
//   setTimeout(log, 2000);  
// });

let btn = document.querySelector('.btn');
let elem = document.querySelector('.box');

btn.addEventListener('click', myAnimation);

function myAnimation() {
  let pos = 0;

  let id = setInterval(frame, 10);
  function frame() {
    if (pos === 220) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

// let btnBlock = document.querySelector('.btn-block');
// let btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//   if (event.target && event.target.classList.contains('first')) {
//     console.log('вы попали в первую кнопку!');
//   }
// });


let btnBlock = document.querySelector('.btn-block');
let btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
  if (event.target && event.target.matches('button.first')) {
    console.log('вы попали в первую кнопку!');
  }
});