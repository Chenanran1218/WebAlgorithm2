// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积
//假设有如下矩阵:
//  * 1 0 1 1 1
//  * 1 1 1 1 1
//  * 1 1 1 1 1
//  * 1 0 0 1 1
//题目要求最大正方形面积，面积 = 边长 * 边长，也就是求最大正方形的边长=>创建了一个二维数组dp，用来存储「这个点为右下角的最大正方形的边长」

const maximalSquare=(maxrix)=>{
    if(maxrix.length==0) return 0;
    let maxlen=0;
    let rowlen=maxrix.length, collen=maxrix[0].length
    for(let row=0;row<rowlen;row++){
        for(let col=0;col<collen;col++){
            if(maxrix[row][col]=='1'){
                maxrix[row][col]=Number(maxrix[row][col])
                if(row!=0&&col!=0){
                    maxrix[row][col]=Math.min(maxrix[row-1][col],maxrix[row][col-1],maxrix[row-1][col-1])+1
                }
                maxlen=Math.max(maxlen,maxrix[row][col])
            }
        }
    }
    return maxlen**2
}
// const maxrix=[
//     [1, 0 ,1, 1 ,1],
//     [1 ,1 ,1, 1, 1],
//     [1 ,1, 1, 1, 1],
//     [1, 0 ,0 ,1, 1]
// ]
const maxrix=matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

console.log(maximalSquare(maxrix))