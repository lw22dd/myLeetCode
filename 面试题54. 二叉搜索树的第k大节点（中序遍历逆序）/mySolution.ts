{
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

    function mySolution54(root: TreeNode | null, k: number): any {
        let res = 0
        const dfs = (root: TreeNode | null) =>{
            if(root == null) return 
            dfs(root.right)
            if(--k==0){
                res = root.val
            }
            dfs(root.left)
        }
        dfs(root)
        return res;
    }
}