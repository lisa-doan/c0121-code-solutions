/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
// console.log('getNumbersToTen(): ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
// console.log('getEvenNumbersToTwenty(): ', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
// console.log(repeatWord('javascript', 30));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
// console.log(doubleAll([1, 2, 3, 4, 5]));

function getKeys(object) {
  var keys = [];
  for (const i in object) {
    keys.push(i);
  }
  return keys;
}

// const newObj = {
//   isbn: '978-1449365035',
//   title: 'Speaking JS',
//   author: 'Dr. Axel Rauschmayer'
// };

// console.log(getKeys(newObj));

function getValues(object) {
  var values = [];
  for (const i in object) {
    values.push(object[i]);
  }

  return values;
}

// console.log(getValues(newObj));
