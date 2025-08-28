{
    function mySolution57(target: number): any {
        let l = 1;
        let r = 2;
        let ans: number[][] = [[]]
        while (l < r) {
            const sum = Math.floor((l + r) * ((r - l + 1) )/ 2)  //连续数组求和，（首项 + 末项）*项数/2


            if (sum == target) {
                let tmp: number[] = []

                for (let t = l; t <= r; t++) {
                    tmp.push(t)
                }
                ans.push(tmp)
                l++;
            } else if (sum > target) {
                l++;
            } else {
                r++
            }


        }
        return ans
    }
    console.log(mySolution57(15))
    console.log(mySolution57(9))

}