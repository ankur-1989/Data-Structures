/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
  const isLengthValid = word.length >= 3;
  const hasVowel = /[aeiouAEIOU]/.test(word);
  const hasSpecial = /\W/.test(word);
  const hasConsonant = /[bcdfghjklmnpqrstvwxyz]/i.test(word);
  if (isLengthValid && hasVowel && hasConsonant && !hasSpecial) return true;
  return false;
};
