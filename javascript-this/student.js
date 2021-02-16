/* exported student */
var student = {
  firstName: 'Lisa',
  lastName: 'Doan',
  subject: 'Javascript',
  getFullName: function (firstName, lastName) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function (firstName, lastName) {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;
  }
};
