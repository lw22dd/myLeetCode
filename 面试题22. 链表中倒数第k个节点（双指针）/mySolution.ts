// class ListNode{
//     val:number = 0;
//     next:ListNode|null =null;
//     constructor(val:number,next:ListNode|null){
//         this.val = val;
//         this.next = next;
//     }
    
// }
function mySolution22(head:ListNode|null,k:number):any{

    if (head === null || k <= 0) {
        return null;
    }
    let Fcur: ListNode | null = head;
    let Scur: ListNode | null = head;
    // 快指针先向前走 k 步
    for (let i = 0; i < k; i++) {
        if (Fcur === null) {
            // 如果 k 大于链表长度，返回 null
            return null;
        }
        Fcur = Fcur.next;
    }
    while(Fcur!=null){
        Fcur = Fcur.next;
        Scur = Scur!.next
    }
    return Scur;
}
// const node5 = new ListNode(5,null);
// const node4 = new ListNode(4, node5);
// const node3 = new ListNode(3, node4);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);

// // 测试 k = 2
// const result1 = mySolution22(node1, 2);
// console.log(result1 ? result1.val : null); // 预期输出: 4