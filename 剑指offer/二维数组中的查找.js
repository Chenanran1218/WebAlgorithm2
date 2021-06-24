function Find(target, array)
{
    // write code here
    let m=array.length,n=array[0].length;
    let row=m-1,col=0
    if(row===0&&col===0) return false;
    while(row>=0&&col<n){
        //每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序
        if(array[row][col]>target){
            row--;
        }else if(array[row][col]<target){
            col++;
        }else return true;
    }
    return false;
}