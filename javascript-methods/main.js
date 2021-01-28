const num1 = 20;
const num2 = 5;
const num3 = 10;
const maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);

const heroes = ['Mom', 'Dad', 'Iron Man', 'Thor'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

const library = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville'
  }
];

const lastBook = library.pop();
console.log('lastBook: ', lastBook);
const firstBook = library.shift();
console.log('firstBook: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library: ', library);

const fullName = 'Lisa Doan';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName: ', sayMyName);
