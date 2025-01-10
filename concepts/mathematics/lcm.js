const { gcdR } = require("./euclid-algo");

const lcm = (num1, num2) => {
  return (num1 * num2) / gcdR(num1, num2);
};

console.log(lcm(1, 2));
