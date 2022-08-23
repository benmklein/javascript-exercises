const palindromes = function (input) {
    // console.log(arguments);
    if (input === '') return true;
    input = input.replace(/[^A-Za-z]+/mg, '').toLowerCase();
    if (input.charAt(0) === input.charAt(input.length-1)){
        return palindromes(input.slice(1, (input.length-1)));
    } return false;

};

console.log(palindromes('aba'));
// Do not edit below this line
module.exports = palindromes;
