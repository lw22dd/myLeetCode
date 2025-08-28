{
    function mySolution63(nums:number[]):any{
        let min = 1000;
        let ans = 0;
        for(let i  =0;i<nums.length;i++){
            min = Math.min(nums[i],min)
            ans = Math.max(nums[i]-min,ans)//找到差值最大的那一天卖出
        }
        return ans
    }
    console.log(mySolution63([7,1,5,3,6,4]))
    console.log(mySolution63([7,6,4,3,1]))


}