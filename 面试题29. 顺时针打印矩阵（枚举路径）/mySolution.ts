function mySolution29(matrix: any[][]): any {
    if (!matrix) return [];
    const dirs = [0, 1, 0, -1, 0];//因为是顺时针则 i + dirs[k]， j + dirs[k+1]，也就是右下左上
    const m = matrix.length; const n = matrix[0].length;
    let i = 0, j = 0, k = 0
    const res = []//记录访问的值
    //每次我们前进的时候，我们都检查是否访问过当前位置或者是否越界，如果越界则更改k方向重新对i，j赋值
    while (res.length != m * n) {
        res.push(matrix[i][j])
        matrix[i][j] = '#'; // 标记为已访问
        console.log(matrix);
        let x = i + dirs[k], y = j + dirs[k + 1];//进行预测移动判断
        if (x < 0 || y < 0 || x >= m || y >= n || matrix[x][y] == "#") {
            k = (k + 1) % 4;
            x = i + dirs[k];
            y = j + dirs[k + 1];

        }
        i = x, j = y;
    }
    return res;
}
console.log(mySolution29([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));