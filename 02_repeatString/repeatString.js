const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';
    let x = '';
    while (num > 0){
        x += str;
        num--;
    } return x;
};

// Do not edit below this line
module.exports = repeatString;
