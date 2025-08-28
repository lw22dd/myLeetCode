{
    function mySolution56(nums: number[]): any {
        let cnt = Array.from({ length: 32 }, a => 0)//定义一个32位二进制记录数组

        for (let num of nums) {
            for (let i = 0; i < 32; i++) {//记录nums上所有累计的1数量
                cnt[i] += num & 1 //记录num最低位是否为1
                num = num >> 1
            }
        }
        let ans = 0
        for (let i = 0; i < 32; i++) {
            if (cnt[i] % 3 == 1) {//只有出现1次的那个数字会产生多余的1
                ans = ans | 1 << i //因为ans每一位上为0，或运算保留原来的cnt[i]记录的 1
            }
        }
        return ans

    }
    console.log(mySolution56([3, 4, 3, 3]))
}