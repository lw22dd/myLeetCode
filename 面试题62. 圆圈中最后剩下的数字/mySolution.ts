{
    function mySolution62(n: number, m: number): any {
        // 通过递归将 “n 人问题” 拆解为 “n-1 人问题”，最终从最小规模（n=1）反推回原问题的解
        //旧编号 0   1     m-1  m  m+1 .... n-1 
        //新编号-m -m+1 .. -1   0   1 ...   新编号 + m = 旧编号 对于每一个新起点都看成0
        // 可定义dfs为公式 f(n,m) = (f(n-1,m) + m)%n 
        const dfs = (n: number, m: number): any => {
            if (n == 1) return 0
            const x = dfs(n - 1, m)
            return (m + x) % n // n为当前环的总数，相当于从x坐标向前数m步


        }
        return dfs(n, m)
    }
}