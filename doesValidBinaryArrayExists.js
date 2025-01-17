
/**
 * @param {number[]} derived
 * @return {boolean}
 */
/* var doesValidArrayExist = function(derived) {
    const original = [0];
    derived.forEach((n, i) => {
        original.push(original[i] ^ n)
    })

    return original.at(-1) === 0 ? true : false;
}; */

/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    return derived.reduce((acc, curr) => curr ^ acc, 0) === 0
};

console.log(doesValidArrayExist([1, 1, 0]))