{
    function mySolution47(grid: number[][]): any {

        const ans = Array.from({ length: grid.length + 1 }, () =>
            new Array(grid[0].length + 1).fill(0)
        );
        // ans[i][j] 为记录从(0,0)->(i,j)的最大累计价值量
        // ans[i-1][j]是ans[i][j]选择从上方走下来之前的累计最大价值

        for (let i = 1; i <= grid.length; i++) {
            for (let j = 1; j <= grid[0].length; j++) {
                ans[i][j] = Math.max(ans[i - 1][j], ans[i][j - 1]) + grid[i - 1][j - 1];
            }
        }
        return ans[ans.length - 1][ans[0].length-1];
    }

    console.log(mySolution47([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1]
    ]))
}