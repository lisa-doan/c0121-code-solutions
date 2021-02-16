var $characters = document.querySelectorAll('span');
var counter = 0;

function typeHandler(event) {
  var character = $characters[counter].textContent;
  if (event.key !== character) {
    $characters[counter].className = 'character incorrect';
  } else {
    $characters[counter].className = 'character correct';
    counter++;
    $characters[counter].className = 'character current';
  }
}

window.addEventListener('keydown', typeHandler);
