function mySolution16(x:number,n:number):any{
    const qpow = (a: number, n: number): number => {
        let ans = 1;
        /*向下整除 n//2 等价于 右移一位 n>>1 ；
        取余数 n%2 等价于 判断二进制最右位 n&1 ；*/ 
        for (; n; n >>>= 1) {//直接将 n 按二进制计算
            if (n & 1) {
                ans *= a;
            }
            a *= a;
        }
        return ans;
    };
    return n >= 0 ? qpow(x, n) : 1 / qpow(x, -n);
}
console.log(mySolution16(2,-2));