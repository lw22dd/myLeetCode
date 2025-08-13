{
    class TreeNode {
        val: any;
        left: TreeNode | null;
        right: TreeNode | null;
        constructor(val?: any, left?: TreeNode, right?: TreeNode) {
            this.val = val === undefined ? 0 : val;
            this.left = left === undefined ? null : left;
            this.right = right === undefined ? null : right;

        }
    }
    function mySolution37(root: TreeNode): any {
        if (!root) return [];
        const str: any = []
        const queue: (TreeNode | null)[] = [];
        queue.push(root);
        let index = 0;
        while (queue.length > index) {
            const node = queue[index];//过程中子节点不断入队
            if (node!=null) {
                str.push(node.val.toString());//节点存在时push值
                queue.push(node.left);
                queue.push(node.right);
            }else{
                str.push("#");//节点null时push
            }
            index++;
        }
        return str.join(",");
    }
    function mySolution37_2(str:string):any{
        if(!str) return null;
        const ans  = str.split(",").reverse();
        const queue:TreeNode[] = [];
        const root = new TreeNode(Number(ans.pop()));
        queue.push(root);//根节点入队

        while(ans.length>0){
            const tempRoot = queue.shift();
            const node = new TreeNode(ans.pop());
            if(node.val!="#"&&tempRoot) {
                tempRoot.left = node;
                queue.push(node);
            }


            const node2 = new TreeNode(ans.pop());
            if(node2.val!="#"&&tempRoot){
                tempRoot.right = node2;
                queue.push(node2);
            } 
        }
        return root;
    }

    const root = new TreeNode(4,
        new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        new TreeNode(7)
    );
    const root2 = new TreeNode(3,
        new TreeNode(9),
        new TreeNode(20,new TreeNode(15), new TreeNode(7))
    );
    const root3 = new TreeNode(1,
        new TreeNode(2),
        new TreeNode(3,new TreeNode(4), new TreeNode(5))
    );

    console.log(mySolution37(root));
    const r = mySolution37(root3);
    console.log(r);
    console.log(mySolution37_2(r));


}