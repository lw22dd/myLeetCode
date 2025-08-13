function mySolution09A(arr: string[], ar: number[][]) {
    class CQueue {
        private stackA: number[];
        private stackB: number[];

        constructor() {
            this.stackA = [];
            this.stackB = [];
        }

        appendTail(value: number): void {
            this.stackA.push(value);
        }

        deleteHead(): number {
            if (this.stackB.length === 0) {
                while (this.stackA.length > 0) {
                    this.stackB.push(this.stackA.pop()!);
                }
            }
            return this.stackB.pop() ?? -1;
        }
    }

    const res: (number | null)[] = [];
    let queue: CQueue | null = null;

    for (let i = 0; i < arr.length; i++) {
        const op = arr[i];
        switch (op) {
            case "CQueue":
                queue = new CQueue();
                res.push(null);
                break;
            case "appendTail":
                if (queue) {
                    queue.appendTail(ar[i][0]);
                    res.push(null);
                }
                break;
            case "deleteHead":
                res.push(queue ? queue.deleteHead() : -1);
                break;
            default:
                res.push(null);
        }
    }

    return res;
}