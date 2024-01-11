/* Function Calling itself for number times is know as recursion */

let num = 100;
const show = () => {
    console.log("Hi Show() calling..."+num);
    num--;
    if(num > 0){
        show();
    }
}
show()

/* recusion factorial code for 6 = 6*5*4*3*2*1 = 720. */

const fact= (n) =>  {
    if(n === 0){
        return 1;
    }else{
        return n * fact(n-1);
    }
}
let number = 6;
let factorial = fact(number);
let factorial5 = fact(5);
console.log("Factorial for "+number+" Is "+ factorial);
console.log(factorial5);