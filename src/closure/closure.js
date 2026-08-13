/* 
    Write a function that returns a function that can only be called once
    e.g. const myFunc = once(() => {console.log('yo')})
    myFunc() -> 'yo'
    myFunc() -> undefined
    myFunc() -> undefined
*/

const once = (callback) => {
  let flag = false;
  
  return function(...args) {
    if(flag === false) {
      flag = true;
      return callback(...args);
    } else {
      return undefined;
    }
  }
};

/* 
    Write a function that returns a function that take an initial number
    Subsequent calls will add that number to the new number
    e.g. const add2 = addFactory(2)
 
    add2(4) -> 6
    add2(7) -> 9
    add2(3) -> 5
*/

const addFactory = (initialNum) => {
  return function(newNum) {
    return initialNum + newNum
  }
};

/* 
    Our person has some sensitive information exposed below
    make `accountBalance` and `bankInfo` private by leveraging closure scope
    for example: 
    personWithPrivateProperties().bankInfo.sensitiveId => undefined
    personWithPrivateProperties().accountBalance => undefined
*/

const personWithPrivateProperties = () => {
  let accountBalance = -5;
  let bankInfo = {
    name: "Bank of Venezuela",
    sensitiveId: "BV123"
  }

  return {
    age: 10,
    job: "Pizza Driver",
    updateBank: (arg) => {
      bankInfo = arg;
    },
    getBankInfo: () => {
      return bankInfo.name;
    },
    getAccountBalance: () => {
      return accountBalance;
    },
    updateAccountBalance: (arg) => {
      accountBalance += arg;
    },
  };
};

module.exports = {
  once,
  addFactory,
  personWithPrivateProperties,
};
