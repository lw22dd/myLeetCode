function mySolution04(nums:number[][],target:number):boolean{
    let flatArray = nums.flat();
    let mySet = new Set(flatArray); 
    
    if(mySet.has(target)){
        return true;
    }

    return false;
}
console.log(mySolution04([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ],5));