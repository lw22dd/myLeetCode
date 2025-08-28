{
    // 参考https://www.bilibili.com/video/BV1Qk4y1r7u5/?spm_id_from=333.337.search-card.all.click&vd_source=f1dce75c43bff69bcbff3e8dfb699cfd
    function mySolution51(nums: number[]): any {
        const mergeSort = (l: number, r: number): any => {
            if (l >= r) {
                return 0;
            }
            let mid = Math.floor((l + r) / 2)
            let ans = mergeSort(l, mid) + mergeSort(mid + 1, r)//从这里开始分组，底部ans初始化为0
            let i = l;
            let j = mid + 1//因为i遍历到mid，所以要+1
            let t: number[] = []//用于记录当前组合的正确排序
            while (i <= mid && j <= r) {//
                if (nums[i] <= nums[j]) {
                    t.push(nums[i++])
                } else { 
                    // 如果我们找到了目标 前>后 的组合，由于mid两边数组都是有序的（在上一次递归中排好了）
                    //所以对于左边的数组来说，一旦 前>后 那么i~mid的所有数字都是 > 后的
                    ans += mid - i + 1
                    t.push(nums[j++])
                }
            }
            //将两边剩余的数据推入
            while (i <= mid) {
                t.push(nums[i++]);
            }
            while (j <= r) {
                t.push(nums[j++]);
            }
            // 将有序的数组覆盖原来的位置
            for(i = l;i<=r;i++){
                nums[i] = t[i-l]//由于t下标从0开始，l和r是相对于nums的下标，这里i-l做一个偏移
            }
            return ans;
        }
        return mergeSort(0,nums.length-1)
    }
    console.log(mySolution51([7,5,6,4]))
}
