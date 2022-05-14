/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

 class Test {

  maxProfit(prices) {
    
    let maxProfit = 0;
    let min = prices[0];
    let max = prices[0];

    for (let i = 1; i < prices.length; i++) {

      const newPrice = prices[i];

      if (newPrice < min) {
        const profit = max-min;
        maxProfit = profit > maxProfit ? profit : maxProfit;
        min = newPrice;
        max = newPrice
      } else if (newPrice > max) {
        max = newPrice
      }
    }

    const profit = max-min;
    maxProfit = profit > maxProfit ? profit : maxProfit;

    return maxProfit;
  }
}

const testExecutor = new Test();

const testCase = [
  {par1: [7,1,5,3,6,4], result: 5},
  {par1: [2,7,1,5,3,10,4], result: 9},
  {par1: [7,6,3,1], result: 0},
];

testCase.forEach(testCase => {
  console.log('Executing test', testCase);
  const result = testExecutor.maxProfit(testCase.par1);
  console.log('Result:', result);
  console.assert(result === testCase.result);
})
