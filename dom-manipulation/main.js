var clickCount = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCnt = document.querySelector('.click-count');

$hotButton.addEventListener('click', function () {
  clickCount++;
  var temp = '';
  if (clickCount < 4) {
    temp = 'cold';
  } else if (clickCount < 7) {
    temp = 'cool';
  } else if (clickCount < 10) {
    temp = 'tepid';
  } else if (clickCount < 13) {
    temp = 'warm';
  } else if (clickCount < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temp;
  $clickCnt.textContent = 'Clicks: ' + clickCount;
});
