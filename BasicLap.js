const object = {
    object1 : {
        brand : 'hp' ,
        model : 'pavilaion',
        year_of_manufactured : '2020'
    },
    object2 : {
        brand : 'asus' ,
        model : 'vivo book 15',
        year_of_manufactured : '2021'
    },
    object3 : {
        brand : 'lenovo' ,
        model : 'think pad',
        year_of_manufactured : '2018'
    }
}
const laptop_object = () => {
    laptop_brand = `${object.object1.brand}`,
    laptop_model = `${object.object1.model}`,
    laptop_year = `${object.object1.year_of_manufactured}`
    laptop_brand2 = `${object.object2.brand}`,
    laptop_model2 = `${object.object2.model}`,
    laptop_year2 = `${object.object2.year_of_manufactured}`
    laptop_brand3 = `${object.object3.brand}`,
    laptop_model3 = `${object.object3.model}`,
    laptop_year3 = `${object.object3.year_of_manufactured}`
    console.log(laptop_brand +" "+laptop_model +" "+laptop_year);
    console.log(laptop_brand2 +" "+laptop_model2+" "+laptop_year2);
    console.log(laptop_brand3 +" "+laptop_model3+" "+laptop_year3);
}
laptop_object();