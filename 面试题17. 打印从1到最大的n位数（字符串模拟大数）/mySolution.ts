function mySolution17(n:number):any{
    const res = Array().fill("");

    const max = Math.pow(10,n);
    for(let i =1;i<max;i++){
        res.push(i);
    }
    return res;
}
console.log(mySolution17(2));
