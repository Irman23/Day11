var string = [7, "ate", "", false, 9, null, 0,  NaN, undefined];
var string2 = ["a", "b", "c"];



function myBouncer(arr) {
    return arr.filter(Boolean);
}
console.log(myBouncer(string));
console.log(myBouncer(string2));



module.exports = myBouncer;