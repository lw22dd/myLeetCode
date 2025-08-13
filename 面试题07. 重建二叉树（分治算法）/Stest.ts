/*function mySolution07(preorder: number[], inorder: number[]): TreeNode | null{
    //创建中序位置映射，为了获取左节点长度
    let map = new Map<number,number>();
    const n = inorder.length;
    for(let i=0;i<inorder.length;i++){
        map.set(inorder[i],i);
    }
    const dfs = (i:number,j:number,n:number) =>{
        if(n<1) return null
        const k = map.get(preorder[i])!;//理论上来说，只要题目不出错map.get(preorder[i])是不会返回null的
        const leftSize = k-j;//左节点个数
        const root = new TreeNode(preorder[i])
        root.left = dfs(i+1,j,leftSize)!//这里的j一直是0，确保k-j得到左节点数量
        root.right = dfs(i+leftSize+1,k+1,n-leftSize-1)!//k+1获取其右节点坐标
        return root;
    }

        return dfs(0,0,n);
}
class TreeNode{
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?:number,left?:TreeNode|null,right?:TreeNode | null){
        this.left= (left === undefined ? null : left) 
        this.val = (val === undefined ? 0 : val) 
        this.right = (right === undefined ? null : right) 
    }
}
console.log(mySolution07([3,9,20,15,7], [9,3,15,20,7]));*/