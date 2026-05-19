// // /*function addTwoNumbers(a,b){
// //     const c=a+b;
// //     return c;
// // }
// // //const add=(a,b)=>{
// //    // const res=a+b
// //    // return res;
// // //}
// // let x=10
// // let y=20
// // let z=addTwoNumbers(x,y)
// // const result=addTwoNumbers(10)
// // //let a =addTwoNumbers(10,20);

// // console.log(result)
// // //clouser
// // const validator=(arg)=>{
// //     const handler=()=>{
// //         console.log(arg);
// //     }
// //     return handler;
// // }
// // const handle=validator(10);
// // handle();
// // //callback
// // const inputChange=(name)=>{
// //     console.log("hello"+ name);

// // }
// // const handleChange =(cb)=>{
// //     cb("user")//calls input change
// // }
// // handleChange(inputChange);
// // */

// // const addTwoNumbers=(a,b)=>{
// //     const c=a+b;
// //     const doubleNumber=()=>{
// //         return c*2
// //     }
// //     return doubleNumber;
// // }
// // const result=addTwoNumbers(10,20);
// // console.log(result())



// const double=(a)=>{
//     return a*2
// }
// const addnum=(a,b,cb)=>{
//     let c=a+b
//     return cb(c)
// }
// let result=addnum(10,20,double)
// console.log(result)

//array
const numbers=[
    {
        name:"user",
        email:"user@gmail.com",
        address:"ktm"

},
{
     name:"user 2",
        email:"user2@gmail.com",
        address:"bkt"
},
{
     name:"user 3",
        email:"user3@gmail.com",
        address:"ktm"

},
{
     name:"user 4",
        email:"user4@gmail.com",
        address:"bkt"

}];
// numbers.forEach((val,i)=>{
//     console.log("name:",val.name)
//      console.log("email:",val.email)
//       console.log("name:",val.address)
//       console.log("*****")
// })
const result =numbers.map((val,i)=>{
    console.log("name:",val.name)
     console.log("email:",val.email)
      console.log("name:",val.address)
      console.log("*****")
//       val.role="user";
//       return val;
})
console.log(result)