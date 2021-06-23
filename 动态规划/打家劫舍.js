//你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
//给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额
var nums=[1,2,3,1,2,4,7,6,4]
var rob=function(nums){
    //##第一种实现的方法是从前到后 dp[i]表示从第一家开始偷到第i家时偷盗的最大价值 最终输出dp[n]
    // if(nums.length==0) return 0;
    // if(nums.length==1) return nums[0];
    // if(nums.length==2) return Math.max(nums[0],nums[1])
    // //定义dp数组 从前往后
    // let dp=[nums[0],Math.max(nums[0],nums[1])];
    // for(let i=2;i<nums.length;i++){
    //     dp[i]=Math.max((nums[i]+dp[i-2]),dp[i-1])
    // }
    // return Math.max(dp[nums.length-1],dp[nums.length-2])


    //从后到前 代码更简练 dp[i]的定义是从第i家开始偷，到第n家时，能偷盗的最大价值
    const n=nums.length;
    //这里将dp数组的长度定义为n+1 这里定义的长度与边界有关系
    let dp=new Array(n+2).fill(0);
    dp[n]=0;
    dp[n-1]=nums[n-1]
    for(let i=n-2;i>=0;i--){
        dp[i]=Math.max(
            dp[i+1], //不偷第i家的
            nums[i]+dp[i+2]
        )
    }
    return dp[0]
}
console.log(rob(nums))