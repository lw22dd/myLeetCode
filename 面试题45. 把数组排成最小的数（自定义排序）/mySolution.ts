{
    function mySolution45(nums:number[]):any{
        //因为题目本身不会给出含前导零的数字，那么按字符串直接拼接就不需要特别处理
        return nums.sort((a, b) =>
             Number(`${a}${b}`) - Number(`${b}${a}`)).join('');
    }
    console.log(mySolution45([10,2]))
}