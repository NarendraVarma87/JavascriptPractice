/* CallBack -> calling a function inside another function is known as callback. 
it form conection btw functions.
*/
const one = (cal_two) => {
    console.log("Firstone is Calling...Now call Secondone");
    cal_two();
}
const two = () => {
    console.log("Secondone executing now...");
}
one(two);

console.log("*******************************************");
/* example 2 - simple ice cream store*/

let stocks = {
    Fruits : ["apple" , "banana" , "pineapple" , "grapes" , "strawberry" , "cherrys"],
    Liquid : ["milk" , "ice"],
    holder : ["cone" , "cup" , "stick"],
    toppings : ["chocolate" , "peanuts" , "dryfruits"]
}

let order = (fruit_Name,holer_name,topping_item,call_production) =>{
 
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_Name]} was selected`);
        call_production();
        setTimeout(()=>{
            console.log(`cutting the ${stocks.Fruits[fruit_Name]} into slices`);
        },1000);
        setTimeout(()=>{
            console.log(`Adding ${stocks.Liquid} into cutted pieces`);
            console.log("Starting the machine");
        },1000);
       setTimeout(()=>{
        console.log(`selecting container ${stocks.holder[holer_name]}`);
       },2000);
       setTimeout(()=>{
        console.log(`Topping item with ${stocks.toppings[topping_item]}`);
        console.log("serving your order to your table :) ");
       },3000);
    },2000)
}
let production = () => {
    console.log("production started...");
}

order(4,1,2,production);

setTimeout(()=>{
    console.log("******************************************");
    order(1,2,3,production);
},8000)
