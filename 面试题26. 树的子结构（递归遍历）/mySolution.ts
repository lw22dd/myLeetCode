{
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function mySolution26(A:TreeNode,B:TreeNode):any{
    if (!A || !B) {
        return false;
    }
    const dfs = (A: TreeNode | null, B: TreeNode | null): boolean => {
        if (!B) {
            return true;
        }
        if (!A || A.val !== B.val) {
            return false;
        }
        return dfs(A.left, B.left) && dfs(A.right, B.right);
    };
    return dfs(A, B) || mySolution26(A.left!, B) || mySolution26(A.right!, B);
}}