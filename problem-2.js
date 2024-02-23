function checkOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(checkOdd([10, 20, 30]));
