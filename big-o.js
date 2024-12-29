/**
* it checks if the size of the input grows, then how fast the time and space complexity increases.
1. Constant - O(1)
2. Logarithmic - O(logn)
3. Linear - O(n)
4. O(n logn)
5. O(n * n)
6. O(n * n * n)
7. O(2n) - fibonacci function
7. O(n!) */

function logn(n) {
  // O(logn)  by default base is 2 in computer science.
  while (n > 1) {
    n = Math.floor(n / 2);
  }
}

function loop(arr) {
  // O(n2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(i, j);
    }
  }
}

function singleLoop(arr) {
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

function constant(n) {
  // O(1)
  const calc = 100 * 1000;
  return calc;
}

function nLogn(n) {
  let y = n;
  while (n > 1) {
    n = Math.floor(n / 2);
    for (let i = 1; i <= y; i++) {}
  }
}

function fibo(n) {
  // O(2^n)
  if (n == 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
