{class TreeNode{
    val:number;
    left:TreeNode|null;
    right:TreeNode|null;
    constructor(val?:number,left?:TreeNode,right?:TreeNode){
        this.val = val===undefined? 0:val;
        this.left = left===undefined? null:left;
        this.right = right===undefined? null:right;

    }
}
function mySolution36(root:TreeNode):any{
    // 处理空树的情况
    if (root === null) return null;
    
    let head:any = null;
    let pre:any = null;//链接指针

    const dfs = (root:TreeNode):any => {
        if(root.left)
        dfs(root.left);
        
        if(pre){
            pre.right = root;//前连后
        }else{
            head = root
        }
        root.left = pre;//后连前
        pre = root;//推进指针
        

        if(root.right)
        dfs(root.right);
            
    }
    dfs(root);
    head.left = pre;
    pre.right = head;
    return head;

}}