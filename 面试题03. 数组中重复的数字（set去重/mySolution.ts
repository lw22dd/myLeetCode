function mySolution03(nums:number[]):number{
    let set = new Set<number>();
    for(let num of nums){
        if(set.has(num)){
            return num;
        }else{
            set.add(num);
        }
    }
    return -1;
}
console.log(mySolution03([2, 3, 1, 0, 2, 5, 3]));