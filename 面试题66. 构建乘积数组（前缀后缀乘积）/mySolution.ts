{
    function mySolution66(nums:number[]):any{
        const n = nums.length;
        const ans: number[] = Array(n);
    for (let i = 0, left = 1; i < n; ++i) {
        ans[i] = left;
        left *= nums[i];//用left不断记录一个方向上的累乘结果，除开当前index
    }
    console.log(ans)
    for (let i = n - 1, right = 1; i >= 0; --i) {
        ans[i] *= right;
        right *= nums[i];
    }
        return ans;
    }
    console.log(mySolution66([1,2,3,4,5]))
}