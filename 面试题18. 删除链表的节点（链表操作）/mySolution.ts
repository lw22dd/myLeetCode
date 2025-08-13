function mySolution18(head:number[],val:number):any{
    head.splice(head.indexOf(val),1);
    return head;
}
console.log(mySolution18([4,5,1,9],1));
