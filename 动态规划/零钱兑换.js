//给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
//如果没有任何一种硬币组合能组成总金额，返回 -1
const coins=[1, 2, 5]
const amount=15;
//dp[i]：定义为i元钱的多少组合数  
//dp数组中每一个元素初始化为正无穷Ininfity 或者amount+1 因为dp[i]最多的硬币组合为i种，即全部为1，因此不可能有可行方案的值为amount+1
let dp=new Array(amount+1).fill(amount+1 );
dp[0]=0;

var coinChange=function(coins,amount){
    for(let i=1;i<=amount;i++){
        for(let coin of coins){
            if(i-coin>=0){
                dp[i]=Math.min(dp[i],dp[i-coin]+1)
            }
        }
    }
    return dp[amount]===amount+1?-1:dp[amount]
}
console.log(coinChange(coins,amount))