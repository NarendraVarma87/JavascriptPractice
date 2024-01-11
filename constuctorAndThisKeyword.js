/* Using This Keyword - it refers to the same class or same object 
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/
    let firstThis = {
        firstName : 'Narendra Varma',
        lastName : 'Uppalapati',
        profession : 'student',
        qualification : 'B.Tech',
        location : 'Visakhapatnam',

        fullName : function(){
            console.log(this.firstName +" "+this.lastName);
        }
    }
    let secondThis = {
        firstName : 'Mahendra Singh',
        lastName : 'Dhoni',
        profession : 'Cricketer',
        qualification : 'Bachelors',
        location :  'Ranchi',
        proqual : function(){
            console.log(this.firstName+" "+this.lastName+" "+this.profession +" "+this.location +" "+ firstThis.firstName);
        }
    }
    const comapare = () => {
        if(firstThis.firstName.length >= secondThis.firstName.length){
            console.log(firstThis);
        }else{
            console.log(secondThis);
        }
    }
    const clrCompare = () => {
        if(firstThis.location.length < secondThis.location.length){
            console.log(secondThis.location + " is Powerful");
        }else{
            console.log(firstThis.location + " is Powerful");
        }
    }
firstThis.fullName();
secondThis.proqual();
comapare();
clrCompare();

/*  Constructor 
1. First letter should be capital inorder to make sure that function is an constructor.
2. we need to use new keyword to create a new object for same constructor function.
we use es5 - class constructor
*/
//using class constructor
class Person {
    constructor(firstName, lastName, profession, qualification, from) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.qualification = qualification;
        this.from = from;
    }
}
let person1 = new Person('kumar' , 'koyala' , 'student' , 'b.tech' , 'tanuku');
console.log(person1);
let person2 = new Person('nag' , 'perla' , 'student' , 'm.tech' , 'pasalapudi');
console.log(person2);

//using function constructor
function Alien(name , tech){
    this.name = name;
    this.tech = tech;
    this.work = function(){
        console.log("Working from past 2 hours")
    }
}
let alien1 = new Alien('varma' , 'JS');
let alien2 = new Alien('vamsi' , 'Java');
alien1.tech = 'JavaScript';
console.log(alien1);
console.log(alien2);
if(alien1.name === alien2.name){
    console.log("Both are same");
}else{
    console.log("Both are different");
}