
var $image = document.querySelector('img');
var $circle = document.querySelectorAll('.fa-circle'); // creates a nodelist
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');
var $circlesContainer = document.querySelector('.carousel-circles');

var images = [
  'images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'
];
var index = 0;
var timerId = null;

// function setCircle(position) {
//   for (let i = 0; i < $circle.length; i++) {
//     $circle[i].setAttribute('class', 'far fa-circle');
//   }
//   $circle[index].setAttribute('class', 'fas fa-circle');
// }

// function right() {
//   clearInterval(timerId);
//   index++;
//   if (index > 4) {
//     index = 0;
//   }
//   $image.setAttribute('src', images[index]);
//   setCircle(index);
//   timerId = setInterval(right, 1000 * 3);
// }

// function left() {
//   clearInterval(timerId);
//   index--;
//   if (index < 0) {
//     index = 4;
//   }
//   $image.setAttribute('src', images[index]);
//   setCircle(index);
//   timerId = setInterval(right, 1000 * 3);
// }

// $leftArrow.addEventListener('click', left);
// $rightArrow.addEventListener('click', right);
// timerId = setInterval(right, 3000);

function test(event) {
  var circlTargetId = event.target.id;
  if (circlTargetId === index) {
    console.log('circlTargetId: ', circlTargetId);
  } else {
    console.log('not a match');
  }

  // var entryTargetClass = event.target.className;

  // console.log('entryTargetClass: ', entryTargetClass);
}

$circlesContainer.addEventListener('click', test);
