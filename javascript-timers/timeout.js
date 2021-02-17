var $h1 = document.querySelector('h1');

function titleChange() {
  $h1.textContent = 'Hello There';
}

setTimeout(titleChange, 2 * 1000);
