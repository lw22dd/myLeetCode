function createIncrement(i){
  let value =0;
  function increment(){
    value += i;
    console.log(`Increment value is ${value}`);
    const message =`LogValue is ${value}`;
    function logMessage(){
      console.log(message);
    }
      return logMessage;
    }
  return increment;
}
const inc= createIncrement(1);//increment
const log1 =inc();//Increment value is ? 1  
inc();// Increment value is ? 2
inc();// Increment value is ? 3
const log2 =inc();//Increment value is ? 4  
log1();// LogValue is ? 1
log2();// LogValue is ? 4