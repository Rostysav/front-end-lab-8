function reverseNumber(x) {
  var returnPositiveNumber = Math.sign(x);
  var returnArrNumber = Math.abs(x).toString().split("").reverse().join("");
  var result = returnPositiveNumber * returnArrNumber;
  return result;
}
console.log(reverseNumber(-12345));  //return -54321
console.log(reverseNumber(123456));	 // return 654321
console.log(reverseNumber(100000));  // return 1