class myNode {
    val:number;
    next:myNode |null;
    random:myNode|null;


       constructor(val?: number, next?: myNode, random?: myNode) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
            this.random = (random===undefined ? null : random)
         }
}
function mySolution35(head:myNode|null):any{
    if(head == null) return null;
    const newHead = new myNode(0);
    let cur:any = head;
    newHead.next = new myNode(cur.val);
    let tail:any = newHead;
    const map = new Map();

    while(cur!=null){
        let tmpNode = new myNode(cur.val)
        tail.next = tmpNode;
        tail = tail.next;
        
            map.set(cur,tail);//每一个cur对应一个tail，则当查找cur.random时对应tail.random
        cur = cur.next;
    }
    cur = head;
    tail = newHead.next;
    while(cur!=null){
        tail.random = map.get(cur.random);
        tail = tail.next;
        
        cur = cur.next;
    }
    return newHead.next;
}
const node5 = new myNode(5);
const node4 = new myNode(4, node5);
const node3 = new myNode(3, node4);
const node2 = new myNode(2, node3);
const node1 = new myNode(1, node2);

// // 测试 k = 2
// const result1 = mySolution22(node1, 2);
// console.log(result1 ? result1.val : null); // 预期输出: 4
console.log(mySolution35(node1));
