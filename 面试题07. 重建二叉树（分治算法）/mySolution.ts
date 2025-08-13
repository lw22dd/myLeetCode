{
    // 根据前序和中序构建二叉树
    function mySolution07(preorder: number[], inorder: number[]): TreeNode | null{
    const map = new Map<number, number>();
    const n = inorder.length;
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);//创建遍历前序时在中序的 位置映射 ，方便查找左节点个数
    }
    //i为前序起始位置，j为中序起始位置,n是当前区间中的节点个数
    const dfs = (i: number, j: number, n: number): TreeNode | null => {
        if (n < 1) {
            return null
        }
        //先找到左侧有几个节点
        const k = map.get(preorder[i]) ??0;//k为中序起始位置
        const l = k-j;
        const root = new TreeNode(preorder[i]);//根据前序遍历中的值创建节点
        root.left = dfs(i+1,j,l);
        root.right = dfs(i+1+l,k+1,n-1-l); //由于前序中根->有左就左，所以在特定区间l内都是其左节点
        //然后从根节点一分为2，新传入的n值为右侧节点数量

        return root;

    }
    return dfs(0,0,n);
}
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

}
console.log(mySolution07([3,9,20,15,7], [9,3,15,20,7]));}