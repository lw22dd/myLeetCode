{
    function mySolution58(str:string):any{
        const s = str.split(" ")
        let  ans = ""
        s.reverse()
        console.log(s)
        for(let i = 0;i<s.length;i++){
            if(s[i]!=""){
                ans+=s[i]+" "
            }
        }
        return ans.trim()
    }
    console.log(mySolution58("the sky is blue"))
    console.log(mySolution58("a good   example"))
    console.log(mySolution58("  hello world!  "))


}