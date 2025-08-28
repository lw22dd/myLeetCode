{
    function mySolution61(nums: number[]): any {
        let max = 0
        let min = 14
        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max) max = nums[i]
            if (nums[i] < min && nums[i] != 0) min = nums[i]

            if (nums[i] != 0) {
                if (!map.has(nums[i])) {
                    map.set(nums[i], 1)
                } else {
                    return false
                }
            }

        }
            console.log("max min",max,min)
        
            return max - min <= 4

    }
    console.log(mySolution61([0, 0, 1, 2, 5]))
}