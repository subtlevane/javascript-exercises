const removeFromArray = function(array) {
    let args = Array.from(arguments)
    let iterations = args.length
    for (x = 1; x < iterations; x++){
        let indexNumber = array.indexOf(args[x])
        if (indexNumber !== -1){
            array.splice(indexNumber, 1)
        }
        else{continue}
    }
    console.log(array)
}

removeFromArray([1,2,3, "berries", "tacos"],2, "tacos")

//accept a variable number of arguments
//the first argument is the array to work with
//the following arguments contain values to remove
//check to see if any of the following arguments is equal to a value
//within the array
//use .splice() to remove those values from the array
//log the result
//two loops
//one to iterate through the array
//one to check equality

let result = []
const array = [1,2,3,4]
console.log(array)

const copyArray = array
console.log(copyArray)

let splicedArray1 = copyArray.slice(1)
console.log(splicedArray1)
console.log(array)

let splicedArray2 = copyArray.slice(2)
console.log(splicedArray2)

result = splicedArray1.concat(splicedArray2)
console.log(result)