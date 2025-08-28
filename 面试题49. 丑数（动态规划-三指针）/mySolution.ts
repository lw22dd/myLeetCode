{
    function mySolution49(n: number): any {
        
        let cout = 0;
        let num = 1;
        let ans = 0;
        while (cout < n) {
            if (isUgly(num)) {
                ans = num
                cout++
            }
            num++
        }
        return ans;
    }
    function isUgly(num: number): any {
        if (num == 1) return true;
        while (num > 1) {
            if (num % 2 == 0) num /= 2
            else if (num % 3 == 0) num /= 3
            else if (num % 5 == 0) num /= 5
            else return false
        }
        return num == 1
    }

    console.log(mySolution49_2(10))


    //第n个丑数是通过前面某个较小的丑数乘以2或乘3或乘以5来获得的
    function mySolution49_2(n:number):any{
        let dp = [1]
        let p2= 0 ,p3 = 0,p5 = 0

        for(let i = 1;i<n;i++){
            const next2 = dp[p2]*2,next3= dp[p3]*3,next5= dp[p5]*5
            dp[i] = Math.min(next2,next3,next5)
            if(dp[i] == next2) p2++
            if(dp[i] == next3) p3++
            if(dp[i] == next5) p5++

        }
        return dp[n-1]
    }
}