function getClosestToZero () {
  let number = Math.abs(arr[0]);
  for(let i = 0, len = arr.length; i < len; i++) {
    if(Math.abs(arr[i]) < number) {
      number = arr[i];
    }
  }
  return number;
}

console.log(getClosestToZero(5,2,4,1,10))

