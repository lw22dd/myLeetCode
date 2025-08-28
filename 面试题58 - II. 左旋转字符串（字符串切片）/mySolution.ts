{
    function mySolution58_2(s: string, k: number): any {
        const tmp = s.slice(0, k)
        
        return s.slice(k) + tmp
        
    }
    console.log(mySolution58_2("abcdefg",2))
}