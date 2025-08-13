{function mySolution42(nums:number[]):any{
    let f = 0;
    let ans = -100000;
    //我们定义两个迭代变量，f表示第i个数结尾的 连续子数组的最大和
    //思想是-若前一个元素大于0，则将其加到当前元素上，这样以来每次遍历都会丢弃负数，拾取正数，
    // 使得f从某处开始始终为一个正数，称该处为子数组的起点
    //写出状态转移方程
    for(let i =0;i<nums.length;i++){
        f = Math.max(f,0) + nums[i];
        ans = Math.max(ans,f);//记录最大的子数组和
    }
    return ans;

}
console.log(mySolution42([-2,1,-3,4,-1,2,1,-5,4]));

}