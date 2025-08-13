function mySolution10(n: number): number {
    if (n === 0) return 0;
    const MOD = 1e9 + 7;
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        const next = (prev + curr) % MOD;
        prev = curr;
        curr = next;
    }
    return curr;
}
/*function mySolution10(n:number):any{
    const f = (n:number):any=>{
        if(n==0) return 0;
        if(n==1) return 1;
        return mySolution10(n-1) + mySolution10(n-2);
    }
    return f(n)%1000000007;
    
}*/
console.log(mySolution10(1));