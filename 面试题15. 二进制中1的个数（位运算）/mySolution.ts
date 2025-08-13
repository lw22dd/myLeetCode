function mySolution15(n:number):any{
    let num = 0;
    let cout = 0;
    while(n!=0){
        num = n%2;
        if(num==1) cout++;
        n = Math.floor(n/2);
    }
    return cout;
}
console.log(mySolution15(11));