const sumAll = function(x, y) {
    for (const arg of arguments) {
        if (typeof arg !== 'number' || arg < 0) return 'ERROR';
    }
    const lower = Math.min(x, y);
    const upper = Math.max(x, y);
    // creates an array from range (lower) to (upper)
    let arr = [...Array(upper-lower+1).keys()].map( x => x+lower);
    
    return (arr.reduce( (x, y) =>  x+y,0));
};

// Do not edit below this line
module.exports = sumAll;
