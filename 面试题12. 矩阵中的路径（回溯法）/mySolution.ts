function mySolution12(board: any[][], word: string): any {
    const m = board.length;
    const n = board[0].length;
    const dfs = (i:number,j:number,k:number):boolean =>{
        
        if(i < 0||i >= m||j < 0 ||j>= n||board[i][j]!==word[k]){//因为每次移动都走四个方向，所以会出现越界
            return false; //如果当前遍历与字符不相等，结束
        }else if(k==word.length-1) return true;//找完所有单词
        else {
            board[i][j] = " ";//将已经遍历的字符标记为已读，因为会有重复的
            //如果出现两个连续重复则导致递归进入死循环，如例1 中CC相互移动
            const res = dfs(i+1,j,k+1) || dfs(i-1,j,k+1) || dfs(i,j+1,k+1) || dfs(i,j-1,k+1)
            board[i][j] = word[k]//无论当前找没找到目标字母都复原，为了保证其他路径能够找到路径
            return res;
        }
    }
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(dfs(i,j,0)){
                return true;
            }
        }
    }
    return false;
} 
console.log(mySolution12([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"));
