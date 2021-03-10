let counter = 3;

let intervalID = setInterval(()=> {
  console.log(counter);
  counter--;
  if(counter === 0) {
    console.log('Blast off!');
    clearInterval(intervalID)
  }
}, 1000);
