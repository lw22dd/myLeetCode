function mySolution39(nums:number[]):any{
    let map = new Map();
    let max = 0;
    let maxCount = 0;
    for(let i =0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i],0);
        }else{
            map.set(nums[i],map.get(nums[i])+1);
        }
        if(map.get(nums[i])>maxCount){
            max = nums[i];
            maxCount = map.get(nums[i]);
        }
    }
    return max;
}
console.log(mySolution39([1, 2, 3, 2, 2, 2, 5, 4, 2]));
