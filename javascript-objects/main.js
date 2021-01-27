// The student Object
const student = {
  firstName: 'Lisa',
  lastName: 'Doan',
  age: 29
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Financial Analyst';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

// The vehicle Object
const vehicle = {
  make: 'Tesla',
  model: 'X',
  year: 2021
};

vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;

console.log('value of vehicle[\'color\']: ', vehicle['color']);
console.log('value of vehicle[\'isConvertible\']: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

// The pet object
const pet = {
  name: 'Hercules',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
