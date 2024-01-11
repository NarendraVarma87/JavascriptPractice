/* Synchronous  - It follows order comming from top to bottom starts */

console.log("I");

console.log("Am");

console.log("Playing");

console.log("Cricket");

console.log("Today Evening");

console.log("With Neighbours");


console.log("***************************************");
console.log("***************************************");
console.log("***************************************");

/* Asynchronous - It won't follow any order all are excutes at same time they won't stop for other's to execute first all are execute indepenedently 
I am using setTimeout() function which is asynchronous.
*/

setTimeout(()=>{
    console.log("I");
},1200);

setTimeout(()=>{
    console.log("Cricket");
},1300);

setTimeout(()=>{
    console.log("Am");
},1200);


setTimeout(()=>{
    console.log("Playing");
},1600);


setTimeout(()=>{
    console.log("Today Evening");
},1400);


setTimeout(()=>{
    console.log("With Neighbours");
},1900);

