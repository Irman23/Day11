var myArr = [2, 4, 0, 8, 10];
myArr[2] = 6;
function myArrayFunction(arr) {
    var myItems = [...arr];
    return myItems;
}
console.log(myArrayFunction(myArr));
module.exports = myArrayFunction;