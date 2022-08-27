const isLetter = function (char){
    if ((char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) ||
        (char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)) return true;
    return false;
}

const shiftLetter = function (char, shift){
    const charCode = char.charCodeAt(0);
    let newCharCode = charCode + shift;
    // if it's upper case
    if (char.toUpperCase() === char){
        if (shift >= 0){
            while (newCharCode > 90){
                newCharCode -= 26;
            }
        } else {
            while (newCharCode < 65){
                newCharCode += 26;
            }
        }
    } 
    // if it's lower case
    else {
        if (shift >= 0){
            while (newCharCode > 122){
                newCharCode -= 26;
            }
        } else {
            while (newCharCode < 97){
                newCharCode += 26;
            }
        }
    }
    const newChar = String.fromCharCode(newCharCode);
    // const utfOffset = (char.toUpperCase() === char) ? 64 : 96;
    // const newChar = String.fromCharCode((char.charCodeAt(0)+shift-utfOffset)%26+utfOffset);
    return newChar;
}

const caesar = function(msg, shift) {
    let arr = msg.split('').map( char => {
        return (isLetter(char) ? shiftLetter(char, shift) : char);
        
    })
    return arr.join('');
};
console.log(isLetter('d'));
console.log(shiftLetter('d', -5));
console.log(caesar('d', -5));

// Do not edit below this line
module.exports = caesar;
