{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }
    function mySolution06(head: ListNode): ListNode | null {
        const ans: number[] = []
        let pre: ListNode | null = null
        let cur: ListNode | null = head;
        while (cur != null) {
            let next = cur.next;
            cur.next = pre
            pre = cur
            ans.push(pre.val)
            cur = next
        }
        console.log(ans)
        return pre;
    }

    function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
        if(!head) return null
        let tmpNode = new ListNode(0, head)
        let P0: ListNode  = tmpNode;
        // 移动到left的上一个位置
        for (let i = 0; i < left - 1; i++) {
            P0 = P0.next!
        }

        let pre: ListNode | null = P0
        let cur: ListNode | null = P0.next;
        for(let i=left;i<=right;i++){
            let next = cur?.next
            cur!.next = pre
            pre = cur
            cur = next!
        }
        P0.next!.next = cur!
        P0.next = pre
        return head
    };

    // console.log(mySolution06([1, 3, 2]));
}