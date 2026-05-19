const numbers=[
    {
        name:"user",
        email:"user@gmail.com",
        address:"kathmandu"

},
{
     name:"user 2",
        email:"user2@gmail.com",
        address:"bhaktapur"
},
{
     name:"user 3",
        email:"user3@gmail.com",
        address:"kathmandu"

},
{
     name:"user 4",
        email:"user4@gmail.com",
        address:"lalitpur"

}];
const result=[];
numbers.forEach((userdata)=>{
    if(userdata.address==="kathmandu"){
        result.push(userdata);
    }
})
console.log(result);
console.log("****")

const result1=numbers.map((userdata1=>{
    if(userdata1.address ==="kathmandu"){
        return userdata1;
    }
}))
console.log(result1);