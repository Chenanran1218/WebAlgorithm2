// 遍历数组中的每一个位置，实时最远可以到达的位置。
// 如果最大位置大于等于数组长度，则结束，返回true，否则返回false

var canJunp = function(nums){
    let n=nums.length;
    let rightmost=0;
    for(let i=0;i<n;i++){
        if(i<=rightmost){
            rightmost=Math.max(rightmost,i+nums[i]);
            if(rightmost>=n-1) return true;
        }

    }
    return false;
}

var nums = [2,3,1,1,4];
console.log(canJunp(nums))