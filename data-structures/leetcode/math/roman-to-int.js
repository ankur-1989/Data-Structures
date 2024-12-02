var romanToInt = function (s) {
  const mapRomanToInteger = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (s.length === 1) return mapRomanToInteger[s];
  let sum = mapRomanToInteger[s[s.length - 1]];

  for (let i = s.length - 2; i >= 0; i--) {
    if (mapRomanToInteger[s[i]] < mapRomanToInteger[s[i + 1]]) {
      sum -= mapRomanToInteger[s[i]];
    } else {
      sum += mapRomanToInteger[s[i]];
    }
  }
  return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
