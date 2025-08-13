{class myTreeNode {
    val: number
    left: myTreeNode | null
    right: myTreeNode | null
    constructor(val?: number, left?: myTreeNode | null, right?: myTreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
function mySolution27(A:myTreeNode|null):any{//对于每一个节点，我们都交换它的两个子节点
    if(A==null) return null;

    const dfs = (node:myTreeNode):any => {
        let tmpNode = node.left;
        node.left = node.right;
        node.right = tmpNode;
        if(node.left!=null)
        dfs(node.left);
        if(node.right!=null)
            dfs(node.right);
        return node
    }
    return dfs(A);
}
// 测试空树
const test1 = null;
const result1 = mySolution27(test1);
console.log(result1 === null); // 预期输出: true

// 测试只有一个节点的树
const test2 = new myTreeNode(1);
const result2 = mySolution27(test2);
console.log(result2.val === 1 && result2.left === null && result2.right === null); // 预期输出: true
const root = new myTreeNode(4,
    new myTreeNode(2, new myTreeNode(1), new myTreeNode(3)),
    new myTreeNode(7, new myTreeNode(6), new myTreeNode(9))
);
const result3 = mySolution27(root);
console.log(result3.val === 4);
console.log(result3.left?.val === 7);
console.log(result3.left?.left?.val === 9);
console.log(result3.left?.right?.val === 6);
console.log(result3.right?.val === 2);
console.log(result3.right?.left?.val === 3);
console.log(result3.right?.right?.val === 1);}