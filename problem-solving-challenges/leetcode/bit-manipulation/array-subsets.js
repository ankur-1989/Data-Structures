function subsets(arr) {
  const max = 1 << arr.length;
  for (let k = 1; k < max; k++) {
    for (let i = 0; i < arr.length; i++) {
      if (k & (1 << i)) {
        console.log(`${arr[i]} `);
      }
    }
    console.log("\n");
  }
}

//subsets([1, 2, 3]);

function countSetBits(n) {
  //O(k) - no of set bits
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count++;
  }
  return count;
}

function subsetsK(arr, k) {
  const max = 1 << arr.length;

  for (let bit = 1; bit < max; bit++) {
    if (countSetBits(bit) === k) {
      let subsets = "";
      for (let i = 0; i < arr.length; i++) {
        if (bit & (1 << i)) {
          subsets += arr[i] + " ";
        }
      }
      console.log(subsets);
    }
  }
}

subsetsK([1, 2, 3], 2);
