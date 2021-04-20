var testArr = [6,3,5,1,2,4];
var sum = 0;
for (var i = 0; i < testArr.length; i++) {
    sum = sum + testArr[i];
    console.log("Num", testArr[i], ", Sum", sum);
}  // prints each Number and Sum up to that Number inclusive; not sure how to get rid of space that prints prior to comma; 

for (var i = 0; i < testArr.length; i++) {
    var prod = testArr[i] * i;
    testArr[i] = prod;
}
console.log(testArr);  // testArr array indices are revised by formula;  