var isPalindrome = function (s) {
  const modifiedString = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  for (let i = 0, j = modifiedString.length - 1; i < j; i++, j--) {
    if (modifiedString[i] !== modifiedString[j]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
