{
    function mySolution56(nums: number[]): any {
        //对数组中的所有数字进行异或运算，得到的结果即为两个只出现一次的数字的异或结果。
        // 通过分组将 “找两个只出现一次的数字” 转化为 “两组中各找一个只出现一次的数字”
        let xs = 0;
        for (const x of nums) {
            xs ^= x; // xs == a ^ b 获取到两个数的异或结果
        }
        const lb = xs & -xs;//提取xs二进制中最右侧的 1 如 0111 -> 0001==lb
        // 因为只有异位出 1 则a b必有一个是有异位的 1，由此找出其中一个目标
        console.log("lb",lb)
        let a = 0;
        for (const x of nums) {
            if (x & lb) { //给数组元素分组，将所有数字按 “lb 标记的位是否为 1” 分成两组，从而分离a b
                a ^= x;
            }
        }
        const b = xs ^ a;
        return [a, b];
    }
    console.log(mySolution56([4, 1, 4, 6]))
    console.log(mySolution56([1,2,10,4,1,4,3,3]))
}