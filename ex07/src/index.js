string = [
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],

];

string1 = [
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [10000000, 1001, 857, 1],
];



function largestNumFormArr(arr) {
    var newArray = [...arr];
    var maxNumArray = [];
    for(let i = 0; i < newArray.length; i++){
        var maxNum = 0;
        for (let j = 0; j < newArray[i].length; j++) {
            if (newArray[i][j] > maxNum){
                maxNum = newArray[i][j];

            }
            
        }
        maxNumArray.push(maxNum);
    }
    return maxNumArray;
    
}


console.log(largestNumFormArr(string));
console.log(largestNumFormArr(string1));
module.exports = largestNumFormArr;
