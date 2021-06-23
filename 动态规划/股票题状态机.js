// dp[i][k][0 or 1]
// 0 <= i <= n-1, 1 <= k <= K
// n 为天数，大 K 为    最多交易数
// 此问题共 n × K × 2 种状态，全部穷举就能搞定。
// dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
//               max(   选择 rest  ,           选择 sell      )

// 解释：今天我没有持有股票，有两种可能：
// 要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
// 要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。

// dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
//               max(   选择 rest  ,           选择 buy         )

// 解释：今天我持有着股票，有两种可能：
// 要么我昨天就持有着股票，然后今天选择 rest，所以我今天还持有着股票；
// 要么我昨天本没有持有，但今天我选择 buy，所以今天我就持有股票了。

// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
const prices= [7,1,5,3,6,4]
const prices2 = [3,3,5,0,0,3,1,4]

let maxProfit=function(prices){
    let n=prices.length;
    if(n<=1) return 0;
    let dp=new Array(n)
    dp.fill([0,0],0,n)
    dp[0][1]=-prices[0];
    dp[0][0]=0;
    for(let i=1;i<n;i++){
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
        dp[i][1]=Math.max(dp[i-1][1],-prices[i]) //由于只能购买一次，因此dp[i][1]第i天持有股票，可能是之前就持有，或者是在第i天购买的---prices[i]
    }
    return dp[n-1][0]
}

console.log(maxProfit(prices2))

// 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
//** 股票交易2
var maxProfit2 = function(prices) {
    let n=prices.length;
    if(n<=1) return 0;
    let dp=new Array(n);
    dp.fill([0,0],0,n);
    dp[0][0]=0;
    dp[0][1]=-prices[0];
    for(let i=1;i<n;i++){
        //在dp[i][0] dp[i][1] 之间有相连得关系 且可以多次交易 
        //这里由于没有对交易次数的限制了，所以dp[i][1]=math.max(dp[i-1][1],dp[i-1][0]-prices[i]) dp[i-1][0]-prices[i]中dp[i-1][0]包含了i-1天前的交易信息
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i]);  
    }
    return dp[n-1][0]
}
console.log(maxProfit2(prices))

// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
//** 股票交易3
var maxProfit3 = function(prices) {
    let n=prices.length;
    if(n<2) return 0;
    let buy1=-prices[0],buy2=-prices[0];
    let sell1=0,sell2=0;
    for(let i=1;i<n;i++){
        buy1=Math.max(buy1,-prices[i])
        sell1=Math.max(sell1,buy1+prices[i])
        buy2=Math.max(buy2,sell1-prices[i])
        sell2=Math.max(sell2,buy2+prices[i])
    }
    return sell2;
};
console.log(maxProfit3(prices2))

// 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
//** 股票交易4
var maxProfit4 = function(k, prices) {
    let n=prices.length;
    if(n<2||k<=0) return 0;
    let buy=new Array(k).fill(-prices[0]);
    let sell=new Array(k).fill(0);
    for(let i=1;i<n;i++){
        buy[0]=Math.max(buy[0],-prices[i]);
        sell[0]=Math.max(sell[0],buy[0]+prices[i]);
        for(let j=1;j<k;j++){
            buy[j]=Math.max(buy[j],sell[j-1]-prices[i]);
            sell[j]=Math.max(sell[j],buy[j]+prices[i]); //第j次买入了 才能进行第j次卖出
        }
    }
    return sell[k-1]
};
console.log(maxProfit4(1,prices2))

// 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
// 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
// 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
//** 股票交易5
var maxProfit5 = function(prices) {
    let n=prices.length;
    if(n<2) return 0;
    if(n===2) return Math.max(0,prices[1]-prices[0]);
    // let dp=new Array(n);
    // dp.fill([0,0],0,n);  错误 dp构建错了
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = [0, 0]
    }
    dp[0][0]=0;
    dp[0][1]=-prices[0];
    dp[1][0]=Math.max(dp[0][0],dp[0][1]+prices[1]);
    dp[1][1]=Math.max(dp[0][0]-prices[1],dp[0][1]);
    for(let i=2;i<n;i++){
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
        dp[i][1]=Math.max(dp[i-1][1],dp[i-2][0]-prices[i]);
    }
    return dp[n-1][0]
};

console.log(maxProfit5(prices2))

// 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
// 返回获得利润的最大值。
// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
//** 股票交易6
var maxProfit = function(prices, fee) {
    let n=prices.length;
    if(n<2) return 0;
    let dp=new Array(n);
    for(let i=0;i<n;i++){
        dp[i]=[0,0];
    }
    // dp[0][1]=-prices[0]-fee; //将每次交易看成买入的股票成本加fee；
    // for(let i=1;i<n;i++){
    //     dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
    //     dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i]-fee);
    // }
    dp[0][1]=-prices[0];
    for(let i=1;i<n;i++){
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee);
        dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
    }
    return dp[n-1][0]
};