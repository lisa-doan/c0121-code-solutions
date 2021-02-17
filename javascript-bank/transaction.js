/* exported Transaction */

// Transaction - creates objects representing money exchanged at the bank in the form of a withdrawal or a deposit
function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}
