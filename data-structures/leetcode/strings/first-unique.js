function firstNonRepeating(str) {
  const elements = {};
  for (let i = 0; i < str.length; i++) {
    if (elements[str[i]]) {
      elements[str[i]]++;
    } else {
      elements[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (elements[str[i]] == 1) {
      return str[i];
    }
  }
  return "-1";
}

console.log(firstNonRepeating("stree"));

module.exports = {
  firstNonRepeating,
};
