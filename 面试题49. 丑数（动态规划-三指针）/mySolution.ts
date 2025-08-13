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

    console.log(mySolution49(10))
}