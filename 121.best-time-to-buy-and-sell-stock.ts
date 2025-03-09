/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let min = prices[0]
    let max = 0
    
    for (let i = 1; i < prices.length; i++) {
      min = Math.min(min, prices[i])
      max = Math.max(max, prices[i] - min)
    }
    
    return max
  }
// @lc code=end

