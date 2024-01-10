/* Loops Basic Syntax
while , for , do while
*/
//while loop
let num = 1;
while(num <= 10){
    console.log("Hi" +" "+num);
    num++;
}

console.log("+*********************************+");
//do-while loop
function doWhile(){
    let value = 10;
    do{
        console.log("Hi "+ value);
        value--;
    }while(value > 0);
}
doWhile();

//for loop
function forLoop(){
    let number = 30;
    for(let i = 1 ; i < number ; i++){
        if(number % i == 0){
            console.log("Even Number "+ i);
        }else{
            console.log("Odd Number "+ i);
        }
    }
}
forLoop();