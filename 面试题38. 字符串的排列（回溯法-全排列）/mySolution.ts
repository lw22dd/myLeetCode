function mySolution38(s:string):any{
    const str = s.split("");
    const res:any  = [];
    const swap = (i:number,j:number):any =>{
        const t = str[i];
        str[i] = str[j];
        str[j] = t;
    }

    //dfs(i)，表示当前排列到了第i个位置
    //我们需要在第i个位置上填入一个字符，这个字符可以从s[i..n-1] 中任意选择。
    const dfs = (i:number):any=>{ 
        if(i==str.length){
            res.push(str.toString());
            return;
        }
        
        let vis = new Set();//为了避免重复填入，我们使用Set监视每次交换产生的结果
        
        // 在 i 到 n - 1 的位置选择一个字符填入当前的位置i，这里
        for(let j = i;j<str.length;j++){
            if(!vis.has(str[j])){
                vis.add(str[j])//第二步时填入[1]
                swap(i,j);//交换0，0 交换1 1
                dfs(i+1)//每次递归时，需要填入的位置推进一步
                swap(i,j);//当填入res记录“abc”后，进入下一个循环时，b c位置交换

            }
        }
    }

    dfs(0);
    //在第一个res时，我们依次交换00 11 22，也就是按顺序填入
    //因为开始的大递归中，定义了n次循环，也就对应第一个字符a b c三个可能
    //接下来的每一次递归，就相当于填入下一个位置，只不过是通过str交换位置实现的
    //由于大递归中i = 0，因此从第二次j循环开始，交换时a就向后推移了
    //我们需要回溯，其实是因为要保证每一个第一个字符都有对应的可能，如果删除回溯，则第一个字符的所有可能会有缺失
    return res;
}
console.log(mySolution38("abc"));