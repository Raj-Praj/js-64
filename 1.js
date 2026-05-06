// // if
// // if else
// //

// // '',""
// // let a = "2+2"; //

// // template literal => ``
// // let user_name = "john";

// // let b = `Hello ${user_name}`; //22 // a
// // console.log(a, b);

// // obj
// const user = {
//   name: "John Doe",
//   email: "john@gmail.com",
//   pass: "1234",
// };
// const user1 = {
//   name: "John Doe",
//   email: "john1@gmail.com",
//   pass: "1234",
// };
// // let key = "name";
// // let name = user["name"];
// // let email = user.email;
// // console.log(user.key);
// const { name, email, pass: password } = user;
// let { name: userName, email: userEmail, pass } = user1;

// //!
// let a;
// a = 45;
// const b = 23;
// b = 5;
// // null

// // console.log(pass);
// console.log(email, userEmail);

//optional chaining
// //?

    //const user = {
    //name: "John Doe",
    //email: "john@gmail.com",
    //pass: "1234",
    //address: {
      //city: "ktm",
      //a: {},
   // },
  //};
  //const user1 = {
    //name: "John Doe",
    //email: "john@gmail.com",
    //pass: "1234",
  //};
  
  // console.log(user1.address.city); //
  // if (user.address) {
  //   console.log(user.address.city);
  // }
  //console.log(user.address?.city ?? "Add not found");
  
  // console.log(a);
  
  // spread [...]
  // let u = {
  //   ...user1,
  //   ...user,
  // };
  
  // console.log(u);
  //let nums = [12, 3, 4, 5];
  //let arr = [12, ...nums]; // [12,...[12, 3, 4, 5]]  => [12,12, 3, 4, 5]
  // console.log("1", ...nums);
  // console.log("2", { ...nums });
  //console.log(arr);
  
  //let [a, b, c, ...y] = arr;
  //console.log(y);
  
  // rest [...]
  //let { name, address, ...x } = user;
  // let { c_pass, ...x } = user;
  
  //console.log(x);
  
  //function add(...numbers) {
    //console.log(numbers);
  
    //   return a + b;
  //}
  
  //add(12, 3); //
  //add(12, 3, 3); //
  //add(12, 4, 5, 6, 7); //
  

//object destructuring
  const productinfo={
    name:"apple",
    price:100,
    quantity:10,
    description:"this is a apple",
    brand:"apple",

  }
  const {name:pname,price,quantity}=productinfo;
  console.log( pname,price,quantity);
 // console.log(name)
  
//spread operator
const numb_1=[1,2,3,4,5];
const numb_2=[6,7,8,9,10];
const numbs=[...numb_1,...numb_2];
console.log(numbs);

//rest operator
console.log("a",'b',"c")
