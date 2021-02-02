var click = 0;

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
});

var $back = document.querySelector('.backlight');
$back.addEventListener('click', function (event) {
  var onOrOff = '';
  if (click % 2 === 0) {
    onOrOff = 'on';
  } else {
    onOrOff = 'off';
  }
  $back.className = 'backlight ' + onOrOff;
});
