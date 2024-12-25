function removeDuplicates(arr) {
  const elements = {};
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (elements[arr[i]]) {
      elements[arr[i]]++;
    } else {
      elements[arr[i]] = 1;
    }
  }
  for (let element in elements) {
    duplicates.push(element);
  }
  return duplicates;
}

const duplicates = removeDuplicates([1, 3, 2, 3, 3, 5, 6, 7]);
console.log(duplicates);

module.exports = {
  removeDuplicates,
};
