function addTwoNumbers(a,b){
    const c=a+b;
    return c;
}
//const add=(a,b)=>{
   // const res=a+b
   // return res;
//}
let x=10
let y=20
let z=addTwoNumbers(x,y)
const result=addTwoNumbers(10)
//let a =addTwoNumbers(10,20);

console.log(result)
//clouser
const validator=(arg)=>{
    const handler=()=>{
        console.log(arg);
    }
    return handler;
}
const handle=validator(10);
handle();
//callback
const inputChange=(name)=>{
    console.log("hello"+ name);

}
const handleChange =(cb)=>{
    cb("user")//calls input change
}
handleChange(inputChange);