/*function mySolution10o(n:number):any{
    //青蛙想上第n级台阶，可从第n一1级台阶跳一级上去，也可从第n一2级台阶跳两级上去，即
//f(n)=f(n- 1)+ f(n - 2)。这实际上可以转换为斐波那契数列的问题。
if (n === 0) return 0;
    const MOD = 1e9 + 7;
    let prev = 1, curr = 1;
    for (let i = 2; i <= n; i++) {
        const next = (prev + curr) % MOD;
        prev = curr;
        curr = next;
    }
    return curr;

}*/
//那如果是f(n)=f(n - 1)+ f(n - 2) + f(n - 3) ？
function mySolution10o(number:number):any{

let con =  1e9 + 7;
//记录初始值
	if (number == 1)
		return 1;
	else if (number == 2)
		return 2;
    else if (number == 3)
		return 4;
	else
	{
		let dp = [];
		dp[1] = 1;
		dp[2] = 2;
		dp[3] = 4;
		let i = 0;
		for (i = 4; i <= number; i++)
		{   //对于每一个f(n)，记录前几次计算的值，相当于前三个数的和
            //使用数组存储所有中间结果导致空间复杂度为 O(n)
			dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % con;
		}
		return dp[number];
	}

}
/*function mySolution(n:number):any{
    if(n==0) return 1;
    if(n==1) return 1;
    if(n==2) return 2;

    return mySolution(n-1) + mySolution(n-2);
}*/
console.log(mySolution10o(3))