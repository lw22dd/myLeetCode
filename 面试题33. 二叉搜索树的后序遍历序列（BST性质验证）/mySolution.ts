function mySolution33(postOrder:number[]):any{
    const dfs = (l:number,r:number):any => {
        if(l>=r) return true;
        const root = postOrder[r];//定义当前根节点，找到第一个大于root的节点 i 然后i右边除root外均大于root
        let i = l;
        while(i<r&&postOrder[i]<root){
            i++;
        }
        for(;i<r;i++){
            if(postOrder[i]<root) return false;
        }
        return dfs(l,i-1) && dfs(i,r-1);//递归判断左右节点
    }
    return dfs(0,postOrder.length-1)

}
console.log(mySolution33([1,6,3,2,5]));
console.log(mySolution33([1,3,2,6,5]));
