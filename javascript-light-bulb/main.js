var click = 0;
var $back = document.querySelector('.backlight');
var $clickButton = document.querySelector('.light');
$clickButton.addEventListener('click', function (event) {
  click++;
  var onOrOff = '';
  if (click % 2 === 0) {
    onOrOff = 'on';
  } else {
    onOrOff = 'off';
  }
  $clickButton.className = 'light ' + onOrOff;
  $back.className = 'backlight ' + onOrOff;
});
