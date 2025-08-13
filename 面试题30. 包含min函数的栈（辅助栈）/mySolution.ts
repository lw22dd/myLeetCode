class Stack{
    stack:number[] = []
    min:number[] = [Infinity];
    constructor(){

    }
    
    public push(val:any):any{
        this.stack.push(val);
        this.min.push(Math.min(val,this.min[this.min.length-1]))
        
    }
    public pop():any{
        this.stack.pop();
        this.min.pop();
    }
    public top():any{
        return this.stack[this.stack.length-1];
    }
    public getMin():any{
        return this.min[this.min.length-1];
    }
}

