function MultiplyString(str, n) {
  if (n <= 0 || isNaN(n)) {
    n = 1;
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
console.log(MultiplyString("Kodego", 2));
