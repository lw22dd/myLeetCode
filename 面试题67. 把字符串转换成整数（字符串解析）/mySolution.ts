{
    function mySolution67(s: string): any {
        let res = ""
        let start = false
        let sign = ""
        for (let i = 0; i < s.length; i++) {
            if (!start&&s[i] == " ") continue
            else if (!start&& (s[i] == "-" || s[i] == "+")) {
                res += s[i]
                start =true
                continue
            }

            if (s[i].match(/[0-9]/)) {
                start = true
                // if (!start && s[i] != "0") {
                //     start = true//去除前导零
                //     res += s[i]
                //     continue
                // }
                // if (start)
                res += s[i]
            } else break
        }
        let r = isNaN(+res) ? 0 : +res;
        if (r > 2147483647) return 2147483647;
        if (r < -2147483648) return -2147483648;
        return r;

    }
    console.log(mySolution67("0-1"))//0
    console.log(mySolution67("   -042"))

    console.log(mySolution67("words and 987"))
    console.log(mySolution67("-91283472332"))
    console.log(mySolution67("   +0 123"))//0
    console.log(mySolution67("0  123"))//0




}