{
    function mySolution64(n: number): any {
        return n && n + mySolution64(--n)
    }
    console.log(mySolution64(3))
}