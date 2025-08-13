function mySolution09(arr:string[],ar:number[][]){
    const stackA: any[] = []
    const stackB: any[] = []

    const appendTail = (tail:any)=>{
        stackA.push(tail);
    }
    const deleteHead = ()=>{
        if(stackB.length ==0){
            while(stackA.length!=0){
                stackB.push(stackA.pop())
            }
        }
        if(stackB.length==0) return -1;
        else return stackB.pop();
    }
    /*const res = []
    const queue:any = []
    const appendTail = (ar:number[][],tail:any)=>{
        queue.push(tail);
        return null;
    }
    const deleteHead = (ar:number[])=>{
        if(queue.length==0) return -1
        else return queue.shift();
    }
    for(let i = 0;i< arr.length;i++){
        if(arr[i]==="appendTail"){
            
            res.push(appendTail(ar,ar[i][0]))
        }else
        if(arr[i] ==="deleteHead"){
            res.push(deleteHead(ar[i]))
        }else{
            res.push(null)
        }
    }
    return res;*/
}
console.log(mySolution09(["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
    ,[[],[],[5],[2],[],[]]))
