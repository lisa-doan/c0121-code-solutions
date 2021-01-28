/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// 1. isUnderFive(number)
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

// 2. isEven(number)
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 3. startsWithJ(string)
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

// 4. isOldEnoughToDrink(person)
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

// 5. isOldEnoughToDrive(person)
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

// 6. isOldEnoughToDrinkAndDrive(person)
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21) {
    return false;
  } else {
    return false;
  }
}

// 7. categorizeAcidity(pH)
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

// 8. introduceWarnerBro(name)
function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else {
    return 'Goodnight everybody!';
  }
}
