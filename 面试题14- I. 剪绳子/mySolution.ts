function mySolution14(n:number):any{
    const f = Array(n+1).fill(1);//数组模拟绳子
/*每一次剪绳子的时候，我们都可以选择剪或不剪，选择其中较大的那一个结果
也就是状态转换方程 f[i]=max(f[i],f[i-j]xj,(i-j)xj)) (j∈[0,i)
*/ 
    for(let i =2;i<=n;i++){//对于每一个长度为i的绳子，我们都计算其最大相乘结果，最后的f[n]即是结果
        for(let j =1;j<i;j++){//计算当前绳子的最大相乘值,每剪一刀做一个判断
            f[i] = Math.max(f[i],f[i-j]*j,(i-j)*j);
            //初始时f[1] = 1。答案即为f[n]。
            //然后是拆分当前 i ，由于每一次对于剪成f[i-j]都是上一次的最大值，
            //所以本质上只要剪两刀去验证当前最大值，从而得到两种结果f[i-j]*j和(i-j)*j
        }
    }
    return f[n];
}