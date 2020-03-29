let box = document.getElementById('box');
let btn = document.getElementsByTagName('button');
let circle = document.getElementsByClassName('circle');
let heart = document.querySelectorAll('.heart');
let firstHeart = document.querySelector('.heart');
let wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '50%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//   item.style.backgroundColor = 'purple';
// });


let div = document.createElement('div');
let text = document.createTextNode('I was here!');

div.classList.add('black');

// div.innerHTML = '<h2>Hello, World!</h2>';
div.textContent = 'Hello, World!';
// document.wrapper.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[0]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]);