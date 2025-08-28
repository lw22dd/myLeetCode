{
    function mySolution59(nums: number[], k: number): any {
        const n = nums.length;
        const ans: number[] = new Array(n - k + 1); // 初始化答案数组，长度为窗口数量
        const q: number[] = []; // 用数组模拟双端队列，存储可能成为最大值的元素下标

        for (let i = 0; i < n; i++) {
            const x = nums[i];

            // 1. 实现队尾单调性：不断移除所有小于等于当前元素的队尾元素
            while (q.length > 0 && nums[q[q.length - 1]] <= x) {
                q.pop();
            }
            q.push(i); // 将当前元素下标加入队尾

            // 2. 移除队首超出窗口范围的元素
            const left = i - k + 1; // 当前窗口左边界
            if (q[0] < left) {
                q.shift(); // 队首元素已不在窗口内，移除
            }

            // 3. 当窗口形成时（左边界 >= 0），记录当前窗口最大值（队首元素）
            if (left >= 0) {
                ans[left] = nums[q[0]];
            }
        }

        return ans;
    }
}