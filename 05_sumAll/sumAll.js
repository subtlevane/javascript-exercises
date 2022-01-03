let sum = 0

const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) === false 
    || Number.isInteger(num2) === false
    || num1 < 0
    || num2 < 0) {
        console.log("ERROR")
    }
    else{
        let lower = Math.min(num1, num2)
        for (i = lower; i <= num2; i++) {
            sum += i
        }
        console.log(sum)
    }
}

sumAll("hi","hi")

// create a variable for the final sum
// take two numerical arguments
// iterate between every number, inclusive, between the two numbers
// start from the lower number and iterate upwards
// each iteration should add the current number to the existing sum