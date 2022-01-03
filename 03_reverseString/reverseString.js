result = ''

const reverseString = function(str) {
    const stringArray = str.split("")
    let reverseArray = stringArray.reverse()
    for(var i of reverseArray){
        result += i
    }
    console.log(result)
};

// Do not edit below this line
module.exports = reverseString;

reverseString("Hello")