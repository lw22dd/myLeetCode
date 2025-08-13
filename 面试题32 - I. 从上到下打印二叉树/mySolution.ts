class Tree {
    val?: number
    left?: Tree
    right?: Tree
    constructor(val?: number, left?: Tree, right?: Tree) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function mySolution32(Tree: Tree | null): any {
    if (!Tree) return [];
    const root = Tree;
    const queue = [];
    const res = []
    queue.push(root);
    let index = 0;

    while (queue.length != 0) {
        for (let i = 0; i < queue.length; i++) {
            let tmpNode = queue.shift();
            if (!tmpNode) break;

            res.push(tmpNode.val);
            if (tmpNode.left) {
                queue.push(tmpNode.left);
            }

            if (tmpNode.right) {
                queue.push(tmpNode.right);
            }

        }

    }
    return res;
}
// 测试空树
const test1 = null;
const result1 = mySolution32(test1);
console.log(result1); // 预期输出: true
const test2 = new Tree(1);
console.log(mySolution32(test2));

const root = new Tree(4,
    new Tree(2, new Tree(1), new Tree(3)),
    new Tree(7)
);
console.log(mySolution32(root));
