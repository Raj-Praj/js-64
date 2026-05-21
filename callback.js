// // setTimeout(()=>{
// //     console.log(" i am inside function timeout");
// // },1000)
// // console.log("i am last line");


// //promise
// const login=(username,password)=>{
//     const obj=new Promise((resolve,reject)=>{
//         const success=true;
//         if(success){
//             resolve({user:{name:"",email:""}})

//         }else{
//             reject({error:"error in login"})
//         }
//     });
//     return obj;
// }
// const result=login("admin","admin");

// result.then((data)=>{
//     console.log(data);
//     console.log("access allow");

// }).catch((exception)=>{
//     console.log(exception);
// })

const func1=async(x)=>{
    if(x){
        return"funct1 is resolved"


    }
    else {
        throw "func1 exception";
    }
}
const func2=(x)=>{
    return new Promise((resolve,reject)=>{
        if(x){
            resolve("func2 is resolved")
        }
        else{
            reject("func2 exception")
        }
    })
}
const func3=(x)=>{
    if(x){
        return"func3 is resolved"

    }else{
        throw"func3 exception";
    }
};
// func1(true)
// .then((res1)=>{
//     console.log(res1);
//     return func2(true)
// })
// .then((res2)=>{
//     console.log(res2)
//     return func3(true)
// })
// .then((res3)=>{
//     console.log(res3);
// })
// .catch((exception)=>{
//     console.log(exception)
// })

(async()=>{
    try{
        // const result1=await func1(true);
        // console.log(result1);
        // const result2=await func2(true);
        // console.log(result2);
        // const result3=await func3(true);
        // console.log(result3);
        const result=await Promise.allSettled([func1(false),func2(true),func3(true)])
        const result1=result.filter((p)=>p.status==="fulfilled");
        const result2=result.filter((p)=>p.status==="rejected");

        console.log(result);
        console.log(result1);
        console.log(result2);
    }catch(exception){
        console.log(exception);
    }finally{
        console.log("i always execute at last")
    }
})();
