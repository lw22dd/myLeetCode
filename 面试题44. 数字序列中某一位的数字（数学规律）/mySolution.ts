{
    function mySolution44(n:number):any{
        
        let k = 1
        let cnt = k*9*Math.pow(10,k-1)//cnt是k位数字符串总位数和

        while(n>cnt){
            n-=k*cnt
            k++;
            cnt = k*9*Math.pow(10,k-1)
        }
        //n=2
        let start = Math.pow(10,k-1)//起点
        let ping = Math.floor((n-1)/k)//每k位平分得到总段数，每一段就是一个数字
        let cur = (start+ping).toString() //n选中的数字
        let index = (n-1)%k
        console.log("start",start)
        console.log("ping",ping)
        console.log("cur",cur)
        console.log("n",n)
        console.log("index",index)


        return Number(cur.charAt(index))

    }
    console.log(mySolution44(3))
    console.log(mySolution44(11))

}