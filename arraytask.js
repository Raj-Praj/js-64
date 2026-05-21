// // const numbers=[
// //     {
// //         name:"user",
// //         email:"user@gmail.com",
// //         address:"kathmandu"

// // },
// // {
// //      name:"user 2",
// //         email:"user2@gmail.com",
// //         address:"bhaktapur"
// // },
// // {
// //      name:"user 3",
// //         email:"user3@gmail.com",
// //         address:"kathmandu"

// // },
// // {
// //      name:"user 4",
// //         email:"user4@gmail.com",
// //         address:"lalitpur"

// // }];
// // const result=[];
// // numbers.forEach((userdata)=>{
// //     if(userdata.address==="kathmandu"){
// //         result.push(userdata);
// //     }
// // })
// // console.log(result);
// // console.log("****")

// // const result1=numbers.map((userdata1=>{
// //     if(userdata1.address ==="kathmandu"){
// //         return userdata1;
// //     }
// // }))


// // console.log(result1);


// // const product = [
// //   {
// //     name: "Wireless Mouse",
// //     price: 29.99,
// //     discountInPercent: 10,
// //     brand: "LogiTech",
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Cotton T-Shirt",
// //     price: 19.5,
// //     discountInPercent: 15,
// //     brand: "UrbanWear",
// //     category: "Clothing",
// //   },
// //   {
// //     name: "Stainless Steel Bottle",
// //     price: 24.0,
// //     discountInPercent: 0,
// //     brand: "HydroLife",
// //     category: "Kitchen",
// //   },
// //   {
// //     name: "Running Shoes",
// //     price: 89.99,
// //     discountInPercent: 20,
// //     brand: "StrideMax",
// //     category: "Footwear",
// //   },
// //   {
// //     name: "Bluetooth Speaker",
// //     price: 45.0,
// //     discountInPercent: 12,
// //     brand: "SoundWave",
// //     category: "Electronics",
// //   },
// //   {
// //     name: "Yoga Mat",
// //     price: 32.5,
// //     discountInPercent: 5,
// //     brand: "ZenFlex",
// //     category: "Sports",
// //   },
// //   {
// //     name: "Ceramic Coffee Mug",
// //     price: 12.99,
// //     discountInPercent: 0,
// //     brand: "BrewCraft",
// //     category: "Kitchen",
// //   },
// //   {
// //     name: "Leather Wallet",
// //     price: 39.0,
// //     discountInPercent: 18,
// //     brand: "ClassicLeather",
// //     category: "Accessories",
// //   },
// //   {
// //     name: "Desk Lamp LED",
// //     price: 55.75,
// //     discountInPercent: 8,
// //     brand: "BrightHome",
// //     category: "Home",
// //   },
// // ];
// // const filteredproduct=product.filter((prod)=>prod.discountInPercent >=10)
// // console.log(filteredproduct);

// // const num=[1,2,3,4,5,6,7,8,9,10];
// // const result=num.reduce((pre,val,index)=>{
// //     console.log({pre,val,index})
// //    return val
// // },0)
// // console.log(result);


// const num1=[45,3,89,21,67,98,12,58,7,34]
// const result1=num1.reduce((p,v,i)=>{
//         return (p>=v)?p:v;
        
// });
// console.log(result1)



num=[45,3,89,21,67,98,12,58,7,34];
function sort_num(arr){
       return arr.reduce((pre,curr)=>{
        let i=0;
                while(i<pre.length && pre[i]<curr){
                        i++;
                }
                pre.splice(i,0,curr);
                return pre;

        },[]);

}
const result=sort_num(num);
console.log(result);