/**
 *
 * PLEASE DO NOT USE THE BUILT IN METHODS FOR THE FOLLOWING EXERCISES
 */
Array.prototype.myFilter = function (callBack) {
  newArray = [];
  for(i = 0; i < this.length; i++) {
    if(callBack(this[i])){
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.myMap = function (callBack) {
  newArray = [];
  for(i = 0;i < this.length; i++) {
    newArray.push(callBack(this[i]));
  }
  return newArray;
};

Array.prototype.myEvery = function (callBack) {
  flag = true;
  for(i = 0; i < this.length; i++) {
    if(!callBack(this[i])) {
      flag = false;
    }
  }
  return flag;
};

Array.prototype.mySome = function (callBack) {
  flag = false;
  for(i = 0; i < this.length; i++) {
    if(callBack(this[i])) {
      flag = true;
      break;
    }
  }
  return flag;
};

const addAllNumbers = (arr) => {
  //add your code here using reduce
  return arr.reduce((prev, next) => prev + next);
};

module.exports = {
  addAllNumbers,
};
