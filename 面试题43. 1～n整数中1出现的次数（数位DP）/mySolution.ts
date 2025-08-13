// {
//     function mySolution43(n:number):any{
//         let ans = 0;
//         for(let i=1;i<=n;i++){
//             const str = i.toString();
//             for(let j = 0;j<str.length;j++){
//                 if(str[j] =='1'){
//                     ans++;
//                 }
//             }
//         }
//         return ans;
//     }
//     console.log(mySolution43(12));
// }
{
    function mySolution43(n: number): any {
        let a = n.toString().split("")
        let f: number[][] = [[]]

        const dfs = (pos: number, cout: number, limit: boolean): any => {
            if (pos < 0) return cout;//如果递归超过最后一位，则不进行计数
            if (!limit && f[pos][cout] != -1) return f[pos][cout];

            let up = 9;//定义可填数字上限

            if (limit) up = Number(a[pos]);

            let ans = 0
            for (let i = 0; i <= up; i++) {
                let t = 0
                if (i == 1) t++
                ans += dfs(pos - 1, cout + t, limit && i == up)
            }
            f[pos][cout] = ans
            return ans;
        }s

        return dfs(a.length, 0, true)
    }
}
{
    function countDigitOne(n: number): number {
        // 将数字转为字符数组，便于按位处理（如12→["1","2"]）
        const digits = n.toString().split('');
        const len = digits.length;

        // 记忆化数组：memo[pos][count]表示在pos位置、已累计count个1、无限制时的结果
        // 初始值设为-1，表示未计算
        const memo: number[][] = Array.from({ length: len }, () => Array(len + 1).fill(-1));

        // 递归函数：计算当前状态下1出现的总次数
        // pos：当前处理的位数（0开始，从最高位到最低位）
        // count：已累计的1的数量
        // limit：是否受原数字限制（true表示当前位最大为原数字对应位，false表示可填0~9）
        const dfs = (pos: number, count: number, limit: boolean): number => {
            
            if (pos === len) {
                return count;// 处理完所有位，返回累计的1的数量
            }
            // 若不受限且已计算过，直接返回记忆化结果
            if (!limit && memo[pos][count] !== -1) {
                return memo[pos][count];
            }

            // 当前位最大可填的数字（受限时为原数字对应位，否则为9）
            const max = limit ? Number(digits[pos]) : 9;
            let total = 0;

            // 对于当前数位的每一种可能，我们都进入下一位
            for (let num = 0; num <= max; num++) {
                // 新的限制条件：若原有限制且当前数字等于max，则下一位仍受限
                const newLimit = limit && (num === max);
                // 新的累计1的数量：若当前数字是1，则+1
                const newCount = count + (num === 1 ? 1 : 0);
                // 递归处理下一位，累加结果
                total += dfs(pos + 1, newCount, newLimit);
            }

            // 不受限时，记录当前状态的结果到记忆化数组
            if (!limit) {
                memo[pos][count] = total;
            }

            return total;
        };

        // 从第0位开始处理，初始累计0个1，且受原数字限制
        return dfs(0, 0, true);
    }
    // limit 通过限制每一位数字的最大值，确保递归过程中生成的所有数字都不超过原始数字 n 的范围。

    // 测试案例
    console.log(countDigitOne(12)); // 输出：5（1、10、11、12中共有5个1）
    console.log(countDigitOne(13)); // 输出：6
}