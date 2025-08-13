{class TreeNode {
    val: number
    left?: TreeNode
    right?: TreeNode
    constructor(val: number, left?: TreeNode, right?: TreeNode) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function mySolution34(root:TreeNode,targetSum:number):any{
    const res:number[][] = [];
    const road:any[] = []
    if(root==null) return [];
    const dfs = (root:TreeNode|any,target:number):any =>{
        if (root === null) return;
        road.push(root.val);
        if(root.left==null&&root.right==null&&target - root.val === 0)
            res.push([...road]);//如果出现能够符合条件的路径则加入
//res.push(...road) 本身在语法上是合法的。... 是扩展运算符，它会把 road 数组展开成一个个独立的元素
// 。而 push 方法可以接受多个参数，所以语法上是没问题的。但是不符合推入一个数组的要求
        dfs(root.left,target-root.val);
        dfs(root.right,target-root.val);
        road.pop();//在顺序执行的条件下，无论是否为正确的路径，在回溯的时候都可以清空road

    }
    dfs(root,targetSum);
    return res;
}}