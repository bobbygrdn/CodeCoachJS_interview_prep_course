/**
 * Return a greeting
 *
 * @returns {string} `Hey my name is <person name>
 */
function personGreeting() {
  return `Hey my name is ${this.name}`;
}

/**
 * Returns a string
 *
 * @param {string} like1
 * @param {string} like2
 * @returns {string} My name is {name} and I am a {job} and like {like1} and {like2}
 */
function personSmallTalk(like1, like2) {
  return `My name is ${this.name} and I am a ${this.job} and like ${like1} and ${like2}`
}

/**
 * Returns a string
 *
 * @param {string[]} hobbies
 * @returns {string} Hey my name is {name} and I like {hobbies}
 */
function listHobbies(...hobbies) {
  hobby_string = hobbies[0];

  for (let i = 1; i < hobbies.length; i++) {
    if(i >= hobbies.length - 1) {
      hobby_string += ` and ${hobbies[i]}`
    } else {
      hobby_string += `, ${hobbies[i]}`
    }
  }
  return `Hey my name is ${this.name} and I like ${hobby_string}`
}

// HINT: leverage the `call` method to make the following functions work as expected

Function.prototype.myBind = function (context, ...args) {
  const outerFn = this;
  return function (...args) {
    return outerFn.call(context, ...args);
  }
};

Function.prototype.myApply = function (context, args = []) {
  return this.call(context, ...args);
};

module.exports = {
  personSmallTalk,
  listHobbies,
  personGreeting,
};
