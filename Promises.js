let stocks = {
    Fruits : ["apple" , "banana" , "pineapple" , "grapes" , "strawberry" , "cherrys"],
    Liquid : ["milk" , "ice"],
    holder : ["cone" , "cup" , "stick"],
    toppings : ["chocolate" , "peanuts" , "dryfruits"]
}

let is_show_open = true;

let order = (time , work) => {
    return new Promise((resolve, reject) => {
        if(is_show_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject(console.log("our shop is closed"));
        }
    })
}
order(2000, ()=> {console.log(`${stocks.Fruits[0]} was selected`)})
.then(()=>{
    return order(1000 , ()=> {
        console.log("production has started");
    });
}).then(()=>{
    return order(1000, ()=>{
        console.log(`${stocks.Fruits[0]} was chopped`);
    })
}).then(()=>{
    return order(1100, ()=> {
        console.log("starting the machine");
    })
})
.then(()=>{
    return order(1200 , ()=> {
        console.log(`ice cream placed on ${stocks.holder[1]}`);
    })
}).then(()=>{
        return order(1500 , ()=>{
            console.log(`${stocks.toppings[0]} was selected`);
        })
    })
.then(()=>{
    return order(2000 , ()=>{
        console.log("serves your ice cream to your table :) ");
    })
})
.catch(()=>{
    console.log("Customer left :( ");
})
.finally(
    ()=>{
        console.log("Timeout shop is closed, visit tommorow :)");
    }
);