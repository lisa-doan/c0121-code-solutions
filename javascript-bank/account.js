/* exported Account */
// Account - creates objects that contain a series of Transactions belonging to a specific account holder

// Accounts assume that Transactions exist

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var withdraw = new Transaction('withdraw', amount);
    this.transactions.push(withdraw);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var getbalance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      getbalance += this.transactions[i].amount;
    } else {
      getbalance -= this.transactions[i].amount;
    }
  }
  return getbalance;
};
