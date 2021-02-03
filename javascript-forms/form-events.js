function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name ', event.target.name);
  console.log('event.target.value ', event.target.value);
}

var $nameInput = document.getElementById('user-name');
var $emailInput = document.getElementById('user-email');
var $messageTA = document.getElementById('user-message');

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);
$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);
$messageTA.addEventListener('focus', handleFocus);
$messageTA.addEventListener('blur', handleBlur);
$messageTA.addEventListener('input', handleInput);
