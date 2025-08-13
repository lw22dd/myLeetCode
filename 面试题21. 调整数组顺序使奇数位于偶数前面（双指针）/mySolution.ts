function mySolution21(nums:number[]):any{

    for(let i =0;i<nums.length;i++){
        if(nums[i]%2==0){
            nums.push(nums.splice(i,1)[0]);
        }
    }
    return nums;
}
console.log(mySolution21([1,2,3,4]));