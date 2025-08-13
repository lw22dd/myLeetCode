function mySolution40(arr:number[],k:number):any{
    arr = arr.sort();
    const res = [];
    for(let i =0;i<k;i++){
        res.push(arr[i]);
    }
    return res;
}
console.log(mySolution40([3,2,1],2));