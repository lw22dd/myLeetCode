{
    class myQueue {
        public main: number[] = []
        public maxQ: number[] = []//maxQ应该是一个递减队列

        constructor() {

        }

        // 每推入一个数字，我们都检查其与maxQ的关系，
        public push_back(number: number): any {
            // 不断弹出末尾小于当前推入的数字
            while (this.maxQ.length && this.maxQ[this.maxQ.length - 1] < number) {
                this.maxQ.pop()
            }
            this.maxQ.push(number)//记录当前最大值
            this.main.push(number)
        }
        // 当弹出时，同时弹出记录最大值的队列
        public pop_front(): any {
            const tmp = this.main.shift()
            if (tmp == this.maxQ[0]) {
                return this.maxQ.shift()
            }
            return tmp

        }
        public max_value(): any {
            return this.maxQ[0]
        }
        public clear(): void {
            this.main = [];
            this.maxQ = [];
        }
    }
    // 测试用例
    function testMyQueue() {
        const queue = new myQueue();

        // 测试1: 初始状态测试
        console.log("测试1: 初始状态");
        queue.clear(); // 清空队列
        console.log("max_value:", queue.max_value()); // undefined
        console.log("pop_front:", queue.pop_front()); // undefined
        console.log("------------------------");

        // 测试2: 单个元素测试
        console.log("测试2: 单个元素");
        queue.clear();
        queue.push_back(5);
        console.log("max_value:", queue.max_value()); // 5
        console.log("pop_front:", queue.pop_front()); // 5
        console.log("pop后max:", queue.max_value()); // undefined
        console.log("------------------------");

        // 测试3: 多个元素递增
        console.log("测试3: 多个元素递增");
        queue.clear();
        queue.push_back(3);
        queue.push_back(5);
        queue.push_back(7);
        console.log("max_value:", queue.max_value()); // 7
        console.log("pop_front:", queue.pop_front()); // 3
        console.log("pop后max:", queue.max_value()); // 7
        console.log("------------------------");

        // 测试4: 多个元素递减
        console.log("测试4: 多个元素递减");
        queue.clear(); // 关键：清空之前的残留
        queue.push_back(8);
        queue.push_back(6);
        queue.push_back(4);
        console.log("max_value:", queue.max_value()); // 8
        console.log("pop_front:", queue.pop_front()); // 8
        console.log("pop后max:", queue.max_value()); // 6
        console.log("------------------------");

        // 测试5: 混合元素
        console.log("测试5: 混合元素");
        queue.clear();
        queue.push_back(6); // 模拟测试4剩余的6
        queue.push_back(4); // 模拟测试4剩余的4
        queue.push_back(2);
        queue.push_back(9);
        queue.push_back(3);
        queue.push_back(1);
        console.log("max_value:", queue.max_value()); // 9
        console.log("pop_front:", queue.pop_front()); // 6
        console.log("pop后max:", queue.max_value()); // 9
        console.log("pop_front:", queue.pop_front()); // 4
        console.log("pop后max:", queue.max_value()); // 9
        console.log("------------------------");

        // 测试6: 重复元素
        console.log("测试6: 重复元素");
        queue.clear();
        queue.push_back(9); // 模拟前面的9
        queue.push_back(5);
        queue.push_back(5);
        queue.push_back(5);
        console.log("max_value:", queue.max_value()); // 9
        queue.pop_front(); // 弹出9
        queue.pop_front(); // 弹出5
        console.log(queue.main)

        console.log(queue.maxQ)
        console.log("pop后max:", queue.max_value()); // 5
        console.log("------------------------");
    }

    testMyQueue();


}