// let wrap = document.querySelector('.wrapper');
// let lastBtn = document.querySelectorAll('button')[7];
// let stlBtn = '';

// wrap.addEventListener('click', disBtn);

// function disBtn() {
//   if (stlBtn === '' || stlBtn === 'inline-block') {
//     lastBtn.style.display = 'none';
//     stlBtn = lastBtn.style.display;
//   } else {
//     lastBtn.style.display = 'inline-block';
//     stlBtn = lastBtn.style.display;
//   }
// }


let wrap = document.querySelector('.wrapper');
let lastBtn = document.querySelectorAll('button');
let checkBtn = '';

wrap.addEventListener('click', disBtn);

function disBtn() {
  if (checkBtn === '') {
    lastBtn[7].style.display = 'none';
    checkBtn = lastBtn[7].style.display;
    lastBtn[6].style.backgroundColor = 'red';
  } else {
    lastBtn[7].style.display = '';
    checkBtn = lastBtn[7].style.display;
    lastBtn[6].style.backgroundColor = 'gold';
  }
}