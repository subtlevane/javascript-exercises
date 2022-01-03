const leapYears = function(year) {
    if (year % 4 === 0){
        if (year % 400 === 0){
            return true
        }
        if (year % 100 === 0){
            return false
        }
        else{return true}
    }
    else{return false}
};

console.log(leapYears(2000))

// leap years are divisible by 4 and 400 but not 100
// first check if divisible by 4, true
// then check if divisible by 400, true
// lastly check if divisible by 100, false
// all other values are false
// this can be accomplished with nested if statements and return