// 1. convertMinutesToSeconds(minutes)
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var minutes = 5;
console.log('result of convertMinutesToSeconds(minutes): ', convertMinutesToSeconds(minutes));

// 2. greet(name)
function greet(name) {
  return 'Hey, ' + name;
}
var name = 'Beavis';
console.log('result of greet(name): ', greet(name));

// 3. getArea(width, height)
function getArea(width, height) {
  return width * height;
}
var width = 42;
var height = 17;
console.log('result of getArea(width, height): ', getArea(width, height));

// 4. getFirstName(person)
function getFirstName(person) {
  return person.firstName;
}
var person = { firstName: 'Lelouche', lastName: 'Lamperouge' };
console.log('result of getFirstName(person): ', getFirstName(person));

// 5. getLastElement(array)
function getLastElement(array) {
  return array[array.length - 1];
}
var array = ['propane', 'and', 'propane', 'accessories'];
console.log('result of getLastElement(array): ', getLastElement(array));
