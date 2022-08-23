const removeFromArray = function(arr, item, ...args) {
    // console.log(...args);
    if (item == null) return arr;
    let filtered = arr.filter( (x) => { return x !== item});
    return removeFromArray(filtered, ...args);
};
// console.log(removeFromArray([1,2,3], 1,2,3,4));

// Do not edit below this line
module.exports = removeFromArray;

