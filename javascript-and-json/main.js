var books = [
  {
    isbn: '0001-2223',
    title: 'Eloquent Javascript',
    author: 'Marijn Haverbeke'
  },
  {
    isbn: '0001-2224',
    title: 'JavaScript: The Definitive Guide:',
    author: 'David Flanagan'
  },
  {
    isbn: '0001-2225',
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'David McFarland'
  }
];

console.log('books: ', books);
console.log('typeof books: ', typeof books);

console.log('JSON.stringify(books): ', JSON.stringify(books));
console.log('typeof JSON.stringify(books): ', typeof JSON.stringify(books))
;

var student = '{"id":123, "name":"Lisa"}';

console.log('student: ', student);
console.log('typeof student: ', typeof student);

var studentObj = JSON.parse(student);
console.log('JSON.parse(String): ', studentObj);
console.log('typeof JSON.parse(String): ', typeof studentObj);
