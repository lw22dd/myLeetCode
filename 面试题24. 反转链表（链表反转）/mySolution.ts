{class ListNode{
    val:number = 0;
    next:ListNode|null =null;
    constructor(val:number,next:ListNode|null){
        this.val = val;
        this.next = next;
    }
    
}
function mySolution24(head:ListNode|null):any{
    let cur = head;
    let h = new ListNode(0,null);
    while(cur!=null){
        let tmp = new ListNode(cur.val,h);
        h = tmp;
        cur = cur.next;
    }
    return h;
}
const node5 = new ListNode(5,null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(mySolution24(node1)); }