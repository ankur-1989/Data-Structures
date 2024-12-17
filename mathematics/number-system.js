/** Number system

1. Decimal number system - base 10
2. Binary number system - base 2 
    - Can represent only 0 or 1. which is understandable by Computer.
*/
// convert decimal to binary
// TODO: Handle negative decimal number as well.
function decToBin(n) {
  let binary = "";
  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  return binary;
}

console.log(decToBin(-9));

function binToDec(n) {
  let dec = 0;
}
