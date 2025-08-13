function mySolution31(pushed:number[],popped:number[]):any{
    const tmp = [];
    let index = 0;
    for(let i = 0;i<pushed.length;i++){
        tmp.push(pushed[i])
        while(popped[index]==tmp[tmp.length-1]&& index<popped.length){
            tmp.pop();
            //popped.shift();shift()操作的时间复杂度是O(n)。
            index++;
        }
    }
    return popped.length==index;
}
console.log(mySolution31([1,2,3,4,5],[4,3,5,1,2]));

console.log(mySolution31([1,2,3,4,5],[4,5,3,2,1]));
