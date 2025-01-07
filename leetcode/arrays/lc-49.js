/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // loop to traverse the array
  // loop to count the characters in the string and store in dictionary
  // loop again to check if the count matches and put them in the same group.
  let groups = {};
  for (let str of strs) {
    let characterArr = Array(26).fill(0);
    for (let c of str) {
      characterArr[c.charCodeAt(0) - 97]++;
    }
    const key = characterArr.join("#");
    if (groups[key]) groups[key].push(str);
    else {
      groups[key] = [];
      groups[key].push(str);
    }
  }
  return Object.values(groups);
};
