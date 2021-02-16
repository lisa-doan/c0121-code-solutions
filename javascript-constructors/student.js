/* exported Student */
function Student(fName, lName, sub) {
  this.firstName = fName;
  this.lastName = lName;
  this.subject = sub;
}

Student.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.getIntroduction = function () {
  return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;
};
