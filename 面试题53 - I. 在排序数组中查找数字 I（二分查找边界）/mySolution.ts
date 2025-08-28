{
    function lowBound(nums: number[], target: number): any {
        let left = 0
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1
            }
        }
        return left
    }
    function mySolution53(nums: number[], target: number): any {
        let start = lowBound(nums,target)
        if(nums[start]!=target||nums.length==0) return [-1,-1]
        let end = lowBound(nums,target+1)
        return `${[start,end]} 次数:${end - start}`
    };
    console.log(mySolution53([5,7,7,8,8,10],8))
    console.log(mySolution53([5,7,7,8,8,10],6))

}