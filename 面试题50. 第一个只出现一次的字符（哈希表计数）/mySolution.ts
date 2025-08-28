{
    function mySolution50(s:string):any{
        let map = new Map();

        for(let i = 0;i<s.length;i++ ){
            if(map.has(s[i])){
                map.set(s[i],map.get(s[i])+1);
            }else{
                map.set(s[i],1);
            }
        }
        for(let i =0;i<s.length;i++){
            if(map.get(s[i])==1){
                return s[i];
            }
        }
        return " ";
    }
    console.log(mySolution50("abaccdeff"))
    console.log(mySolution50(""))

}