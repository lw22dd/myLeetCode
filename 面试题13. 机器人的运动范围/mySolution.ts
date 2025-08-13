function mySolution13(m: number, n: number, k: number): number {
    const visited: boolean[] = Array(m * n).fill(false);

    const isSumValid = (i: number, j: number): boolean => {
        let sum = 0;
        while (i > 0 || j > 0) {
            sum += (i % 10) + (j % 10);
            i = Math.floor(i / 10);
            j = Math.floor(j / 10);
        }
        return sum <= k;
    };

    const dfs = (i: number, j: number): number => {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i * n + j] || !isSumValid(i, j)) {
            return 0;
        }
        visited[i * n + j] = true;
        return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
    };

    return dfs(0, 0);
}

console.log(mySolution13(2, 3, 1)); // 输出3
console.log(mySolution13(3, 1, 0)); // 输出1