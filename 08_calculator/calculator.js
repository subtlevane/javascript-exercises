const add = function(n1, n2) {
  result = n1 + n2
  return result
};

const subtract = function(n1, n2) {
	result = n1 - n2
  return result
};

const sum = function(array) {
  result = 0
  for(var i of array){
    result += i
  }
  return result
  };

const multiply = function(n1, n2) {
  result = n1 * n2
  return result
};

const power = function(n1, n2) {
	result = n1 ** n2
  return result
};

const factorial = function(n) {
  result = 1
	for (i = n; i > 0; i--){
    result *= i
  }
  return result
};

console.log(add(1,2))
console.log(substract(1,2))
console.log(sum([1,2,3]))
console.log(multiply(2,3))
console.log(power(3,3))
console.log(factorial(5))