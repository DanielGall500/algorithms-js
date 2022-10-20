/**
Goal: maximise the buy/sell profit of stocks given an array of stock prices on each day.
**/

var maxProfit = function(prices) {
  let max = 0;

  // create a sliding window left/right index
  let left = 0;
  let right = 1;

while (right < prices.length) {
    buy = prices[left];
    sell = prices[right];
    profit = sell - buy;

    // buy is always going to be the minimum
    // value that we've encountered
    if(buy < sell) {
        // check whether to update max
        max = Math.max(max,profit);
    }
    else {
        // move the buy day to the sell day
        // ie update the minimum value
        left = right;
    }
    // move to the next sell day
    right++;

  }
  return max;
};
