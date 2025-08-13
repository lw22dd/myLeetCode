function mySolution05(s:string):string{
    s = s.replace(/\s/g,"%20");
    return s
}
console.log(mySolution05("We are happy."))
