import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';

{
/**
我们可以使用两个堆来维护所有的元素，一个小根堆minQ和一个大根堆marQ，其中小根堆minQ存
储较大的一半，大根堆marQ存储较小的一半。
 */
    class MedianFinder {
        private minQ = new MinPriorityQueue<number>();//小顶堆存储整体中较大的部分
        private maxQ = new MaxPriorityQueue<number>();//大顶堆存储整体中较小的部分

        addNum(num: number): void {
            const [minQ, maxQ] = [this.minQ, this.maxQ];
            maxQ.enqueue(num);//大顶堆入堆并堆化
            const maxDequeued = maxQ.dequeue();//为了保持size差距，大顶再出堆
            if (maxDequeued) {
                minQ.enqueue(maxDequeued);//小顶堆入堆大顶弹出的那个
            }
            if (minQ.size() - maxQ.size() > 1) {//控制整体堆数量的奇偶
                const minDequeued = minQ.dequeue();
                if (minDequeued) {
                    maxQ.enqueue(minDequeued);
                }
            }
        }
    
        findMedian(): number {
            const [minQ, maxQ] = [this.minQ, this.maxQ];
            if (minQ.size() === maxQ.size()) {
                const minFront = minQ.front();
                const maxFront = maxQ.front();
                if (minFront && maxFront) {
                    return (minFront + maxFront) / 2;
                }
            }
            const minFront = minQ.front();
            if (minFront) {
                return minFront;
            }
            throw new Error('No elements in the queues');
        }
    }



}
