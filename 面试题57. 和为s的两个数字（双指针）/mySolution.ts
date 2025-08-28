{
    function mySolution57_2(nums:number[],target:number):any{
        let l=0;
        let r= 1;
        const ans:number[] = []
        while(l<r){
            const sum = nums[l] + nums[r]
            if(sum==target){
                ans.push(nums[l])
                ans.push(nums[r])
                return ans
            }else if(sum<target){
                r++
            }else{
                l++
            }

        }
    }
    console.log(mySolution57_2([2,7,11,15],9))
    console.log(mySolution57_2([10,26,30,31,47,60],40))

}