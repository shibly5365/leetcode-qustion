/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
      let maxWealth = 0;

    for (let customer of accounts) {
        let wealth = customer.reduce((sum, money) => sum + money, 0);
        maxWealth = Math.max(maxWealth, wealth);
    }

    return maxWealth;
};