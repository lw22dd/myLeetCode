{
    class ListNode {
        val: number
        next: ListNode | null
        constructor(val?: number, next?: ListNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }
    function mySolution52(A:ListNode | null,B:ListNode | null):any{
        let a = A
        let b = B

        // 因为两个指针遍历的总长度相同，都是A+B的总路程，
        // 因此尽管起点不一样，但遍历速度一致的时候两者一定会相遇
        while(a!=b){
            a = a==null? B:a.next
            b = b==null? A:b.next
        }
        return a
    }
    console.log()
}