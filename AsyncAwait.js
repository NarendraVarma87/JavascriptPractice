let stocks = {
    Fruits : ["apple" , "banana" , "pineapple" , "grapes" , "strawberry" , "cherrys"],
    Liquid : ["milk" , "ice"],
    holder : ["cone" , "cup" , "stick"],
    toppings : ["chocolate" , "peanuts" , "dryfruits"]
}

topping_choice = () =>{
    return new Promise((resolve , reject) => {
        setTimeout(()=> {
            resolve(console.log("which topping would you love"));
        } ,3000)
    })
}
                                
kitchen();
async function kitchen() {
    console.log(" a ");
    console.log(" b ");
    await topping_choice();
    console.log(" c ");
    console.log(" d ");
}
