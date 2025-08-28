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
    function mySolution55(root:TreeNode|null):any{

        const dfs = (root:TreeNode|null):any=>{
            if(!root) return 0

            else{
                return Math.max(dfs(root.left),dfs(root.right)) + 1
            }
        }
        return dfs(root)
    }
}