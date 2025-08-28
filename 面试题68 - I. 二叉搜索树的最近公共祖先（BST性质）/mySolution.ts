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
    function mySolution68(root: TreeNode | null, p: number, q: number): any {
         if (root === null) return null;
    
        let min = Math.min(q, p)
        let max = Math.max(q, p)
        const dfs = (root: TreeNode | null):number|null => {
            if (root == null) return null

            if (root.val >= min && root.val <= max) {
            console.log(root?.val,min,max)

                return root.val
            } else if (root.val < min){
                console.log("right")

                return dfs(root.right)

            } else {
                console.log("left")
               return  dfs(root.left)

            }
        }
        return dfs(root)

    }
    // 构建 BST：
//       6
//     /   \
//    2     8
//   / \   / \
//  0   4 7   9
//     / \
//    3   5
    const root = new TreeNode(6);
    root.left = new TreeNode(2);
    root.right = new TreeNode(8);
    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);
    root.left.right.left = new TreeNode(3);
    root.left.right.right = new TreeNode(5);

    // p=2，q=8 → LCA 是 6
    console.log(mySolution68(root, 2, 4)); // 预期输出：2
}