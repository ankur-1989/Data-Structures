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

/**
 * 
 * Time complexity and space complexity to find the efficiency of the algorithm. There are some mathematical tools to determine the time and space complexity. 
1. Asymptotic analysis of algorithms
    * We don't go by exact numbers- like how much exact time an algorithm is taking or how much memory to find the best algorithm.
    * It helps in determining how time and space are increasing if we increase the input size.
    * There are three notations to determine the runtime analysis of an algorithm
           - Omega notation - lower bound which is a best scenario.
           - bigo notation - upper bound which is the longest amount of time. 
           - theta notation - express both upper bound and lower bound - i.e average amount of time

    * For constant algorithm where time taken is constant irrespective of input size- O(1) 
    * For Linear algorithm, time complexity will be O(n)
    * For polynomial algorithm, O(n2)       
 */

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
