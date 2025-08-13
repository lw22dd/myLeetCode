{class ListNode {
    val: number = 0;
    next: ListNode | null = null;
    constructor(val: number, next: ListNode | null) {
        this.val = val;
        this.next = next;
    }

}
function mySolution25(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const newList = new ListNode(0, null);//注意这里的链表可以初始化为一个无关项，返回newList.next就可以

    let tail = newList;


    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            tail.next = new ListNode(l1.val, null);
            l1 = l1.next;
        } else {
            tail.next = new ListNode(l2.val, null);
            l2 = l2.next;
        }
        tail = tail.next;
    }
    while (l1 != null) {
        tail.next = new ListNode(l1.val, null);
        l1 = l1.next!;
        tail = tail.next;

    }
    while (l2 != null) {
        tail.next = new ListNode(l2.val, null);
        l2 = l2.next!;
        tail = tail.next;
    }
    return newList.next;
}

const node3 = new ListNode(4, null);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const Node3 = new ListNode(4, null);
const Node2 = new ListNode(3, Node3);
const Node1 = new ListNode(1, Node2);
console.log(mySolution25(node1, Node1));}