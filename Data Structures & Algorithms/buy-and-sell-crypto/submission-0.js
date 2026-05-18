class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minBuy = Infinity;
        for(let price of prices){
            minBuy = Math.min(minBuy, price);
            let profit = price - minBuy;

             maxProfit = Math.max(profit, maxProfit);
        }
    return maxProfit;
        }
}

/*
[10 1 5 6 7 1]

day price minbuy profit maxProfit
10.  10     10      0       0
1    1      1       0       0
5    5      5       4       4
6    6      6       6       6




*/
