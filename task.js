/*const score=300;
const p= score/500 *100;
if(p>=80){
    console.log("distinction");
}
else if(p>=60 && p<80){
    console.log("first division");
}
else if(p>=45 && p<60){
    console.log("second division");
    }
else if(p>=32 && p<45){
    console.log("third division");
}
else{
   console.log("sorry! you are failed");
}


let i=1
for(;;){
    console.log(i);
    i++;
    if(i>5){
        break;
    }
}
*/
const product=[
    {
        name:"mobile",
        brand:"samsung",
        category:"electronics",
        price:10000,
        discount:"10%",

    },
    {
        name:"laptop",
        brand:"dell",
        category:"electronics",
        price:200000,
        discount:"20%",
        
    },
    {
        name:"tv",
        brand:"sony",
        category:"electronics",
        price:30000,
        discount:"10%",
        
    },
    {
        name:"headphone",
        brand:"boat",
        category:"electronics",
        price:1000,
        discount:"5%",
        
    },
    {
        name:"refrigerator",
        brand:"whirlpool",
        category:"electronics",
        price:50000,
        discount:"10%",
        
    }
]

for(let i=0;i<product.length;i++){
    console.log("Name:"+product[i].name);
    console.log("Brand:"+product[i].brand);
    console.log("Category:"+product[i].category);
    console.log("Price: Npr "+product[i].price);
    console.log("Discount:"+product[i].discount);
    console.log("------");
}
//hello i am committing this file

//what is the output of the following code?