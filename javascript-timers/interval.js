var $head = document.querySelector('h1');

function countdown() {
  var count = $head.textContent;
  if (count > 1) {
    count--;
    $head.textContent = count;
  } else {
    $head.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownInterval);
  }
}

var countdownInterval = setInterval(countdown, 1000);
