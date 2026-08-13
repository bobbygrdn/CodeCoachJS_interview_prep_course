/**
 * Return an iterator counting down from the initial number
 *
 * @param {number} initial initial num to start loop
 * @returns {iterator} ex: {value: 1, done: false}
 */
function* forLoopGenerator(initial) {
    for(let current = initial; current > 0; current--) {
        yield current;
    }
}

/**
 * Return an iterator generating a unique id
 *
 * @returns {iterator} ex: {value: 1231234, done: false}
 */
function* generateRandomId() {
    while (true) {
        yield Math.random();
    }
}

module.exports = {
    forLoopGenerator,
    generateRandomId,
};

