const add = function(x,y) {
  return x + y;
	
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce( (x,y) => x + y,0);
};

const multiply = function(arr) {
  return arr.reduce( (x,y) => x*y,1);
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
	return [...Array(num+1).keys()].slice(1).reduce( (x,y) => x*y,1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
