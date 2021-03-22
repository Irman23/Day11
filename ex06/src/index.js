var string = [[2, 5, 2], [0.5, 0.2], [8]];
 

function multiplyArrayFunction(myArray) {
    myNewArray = [...myArray];

    var product = 1;
    var sum = 0;
    var arr = [];
    for (let i = 0; i < myNewArray.length; i++) {
        for (let j = 0; j < myNewArray[i].length; j++){
        product = myNewArray[i][j];
        sum += myNewArray [i][j];

        }
        
    }
    arr.push(product, sum);
    return arr;
}

console.log(multiplyArrayFunction(string));
module.exports = multiplyArrayFunction;


