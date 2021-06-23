//一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
//题目力扣：https://leetcode-cn.com/problems/unique-paths/
//dp[i][j]从矩阵种[0][0]到[i][j]的全部路径数（最大可能数） 状态转移方程：dp[i][j]=dp[i-1][j]+dp[i][j-1]
//初始化dp 第一列应为1只有一种走法 第一行应为1 只能一直右走
var uniquePaths = function(m, n){
    // let dp=new Array(m).fill(0).map(()=>new Array(n).fill(0))
    // for(let i=0;i<m;i++){
    //     dp[i][0]=1
    // }

    //就是构建一个m*n的矩阵，第一列和第一行为1
    let dp=new Array(m).fill(0)
    for(let i=0;i<m;i++){
        dp[i]=new Array(n).fill(0)
        dp[i][0]=1
    }
    for(let j=0;j<n;j++){
        dp[0][j]=1
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1] 
}
console.log(uniquePaths(3,7))