//给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m] 。
//请问 k[0]k[1]...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

var cuttingRope = function(number){
    if(number<=3) return number-1;
    let times=Math.floor(number/3)
    let b=number%3;
    if(b==0) return Math.pow(3,times);
    if(b==1) return Math.pow(3,times-1)*2*2;
    else return Math.pow(3,times)*2
}

console.log(cuttingRope(10))