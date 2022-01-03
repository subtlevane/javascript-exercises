const ftoc = function(f) {
  c = (f-32) * (5/9)
  resultC = Math.round(c*10) / 10
  return resultC
};

const ctof = function(c) {
  f = c*(9/5) + 32
  resultF = Math.round(f*10) / 10
  return resultF
};

console.log(ftoc(-32))
console.log(ctof(0))

// Fahrenheit to Celsius
// C = (F-32) * (5/9)

// Celsius to Fahrenheit
// F = C*(9/5) + 32

// Use Math.round(num*10) / 10 to round to the nearest first decimal