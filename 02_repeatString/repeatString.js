result = ''

const repeatString = function(text, num) {
    if (num < 0){
        result = "ERROR"
    }
    for(i = 0; i < num; i++){
        result = result + text
    }
};

// Do not edit below this line
module.exports = repeatString;
