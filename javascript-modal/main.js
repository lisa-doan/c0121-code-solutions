
var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.openButton');
var $closeButton = document.querySelector('.closeButton');

$openButton.addEventListener('click', function (event) {
  $modal.className = 'modal view';
});

$closeButton.addEventListener('click', function (event) {
  $modal.className = 'modal hidden';
});
