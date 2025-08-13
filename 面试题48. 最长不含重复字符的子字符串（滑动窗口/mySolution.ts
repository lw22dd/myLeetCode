{
    function mySolution48(s: string): any {
        let maxStr: any[] = []
        let tmpStr: any = []
        let i = 0;

        // while(j<=s.length){
        //     if(!map.has(s.charAt(j))){
        //         tmpStr.push(s.charAt(j))
        //         map.set(s.charAt(j),1)
        //         j++;

        //     }else{//如果map中存在重复，说明字符串结束，移动到重复位置的下一位，直接跳过重复字符
        //         maxLength = Math.max(maxLength,j+1 - i)
        //         i++;
        //         j = i
        //         map.clear();
        //         if(tmpStr.length>maxStr.length){//如果找到更大的则记录最大字符串
        //             maxStr = tmpStr.slice()

        //         }
        //         tmpStr = []
        //     }
        // }
        // console.log("maxStr",maxStr.join(""))
        let map = new Map();
        let maxLength = 0;


        let left = 0;
        for (let right = 0; right < s.length; right++) {
            const c = s[right];
            if (!map.has(c)) {
                map.set(c, 1)

            } else {//如果出现重复字符，就更新left指针
                map.set(c, map.get(c) + 1)
                while (map.get(c) > 1) {
                const lc = s.charAt(left)

                    map.set(lc, map.get(lc) - 1)
                    left++;
                }
            }
            maxLength = Math.max(maxLength,right - left +1)

        }
        return maxLength;

    }
    console.log(mySolution48("pwwkew"))
    console.log(mySolution48("abcabcbb"))
    console.log(mySolution48("bbbbb"))
    console.log(mySolution48(" "))
    console.log(mySolution48("abba"))//最后一个a重复，i又回到原点+1，此时j

}