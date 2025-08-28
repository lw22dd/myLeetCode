{
    function mySolution53_2(nums: number[]): any {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {//到底要不要加 = 取决于left和right是否取闭区间，
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] > mid)//说明目标数字在l~mid
                right = mid - 1 //开闭区间对mid更新边界也有影响，闭区间 mid - 1 ，开区间mid
            else left = mid + 1
        }
        return left;
    }
    console.log(mySolution53_2([0, 1, 2, 3, 4, 5, 6, 7, 9]))
    console.log(mySolution53_2([0, 1, 2, 3, 4, 5, 6, 7, 9]))

}