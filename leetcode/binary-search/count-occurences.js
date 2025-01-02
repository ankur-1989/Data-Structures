const { firstOccurence } = require("./first-occurence");
const { lastOccurence } = require("./last-occurence");

function countOccurences(arr, target) {
  const first = firstOccurence(arr, target);
  const last = lastOccurence(arr, target);
  return last - first + 1;
}

module.exports = {
  countOccurences,
};
