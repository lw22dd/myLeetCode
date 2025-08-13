class myTreeNode {
    val: number
    left: myTreeNode | null
    right: myTreeNode | null
    constructor(val?: number, left?: myTreeNode | null, right?: myTreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
function mySolution27(A:myTreeNode|null):any{//对于每一个节点，我们都比较它的两个子节点
    if(A==null) return true;

    const dfs = (a:myTreeNode|null,b:myTreeNode|null):any => {
        if(a==null&&b==null) return true; //因为不断递归，如果都没有出现false返回又出现两个都为null，可以认为对称
        if((a!=null&&b==null)||(a==null&&b!=null) || a!.val!=b!.val) return false

        return dfs(a!.left!,b!.right!) && dfs(a!.right!,b!.left!)//因为对称，我们分别比较两边
    }
    return dfs(A.left,A.right);
}
const testCase1 = null;
console.log(`测试用例 1: 输入为空树，预期输出: true，实际输出: ${mySolution27(testCase1)}`);

// 2. 对称树 [1,2,2,3,4,4,3]
const testCase2 = new myTreeNode(1);
testCase2.left = new myTreeNode(2);
testCase2.right = new myTreeNode(2);
testCase2.left.left = new myTreeNode(3);
testCase2.left.right = new myTreeNode(4);
testCase2.right.left = new myTreeNode(4);
testCase2.right.right = new myTreeNode(3);
console.log(`测试用例 2: 输入对称树 [1,2,2,3,4,4,3]，预期输出: true，实际输出: ${mySolution27(testCase2)}`);

// 3. 非对称树 [1,2,2,null,3,null,3]
const testCase3 = new myTreeNode(1);
testCase3.left = new myTreeNode(2);
testCase3.right = new myTreeNode(2);
testCase3.left.right = new myTreeNode(3);
testCase3.right.right = new myTreeNode(3);
console.log(`测试用例 3: 输入非对称树 [1,2,2,null,3,null,3]，预期输出: false，实际输输出: ${mySolution27(testCase3)}`);