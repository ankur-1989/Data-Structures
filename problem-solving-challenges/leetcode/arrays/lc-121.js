function maxProfit(prices) {
  let maximumProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i - 1]);
    const profit = prices[i] - minPrice;
    maximumProfit = Math.max(maximumProfit, profit);
  }
  return maximumProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
