function mySolution11(numbers:number[]):number{
    let left = 0;
    let right = numbers.length-1;

    while(left<right){
        let mid = Math.floor((left+right) /2);
        console.log(mid)
        if(numbers[mid]>numbers[right]){
            left = mid+1;
        }else if(numbers[mid]<numbers[right]){
            right = mid;
        }else{
            right--;
        }
    }
    return numbers[left];
}
console.log(mySolution11([3,1]))