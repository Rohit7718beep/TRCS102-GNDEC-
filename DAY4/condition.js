// let age=23;
// if(age>=20){
//     console.log("greater than 20")
// }
// else {
//     console.log("Less than 20")
// }

// let marks=45;


// if(marks>23 && marks<45){
//     console.log("D")
// }
// else if(marks>45 && marks<60){
//     console.log("C")
// }
// else if(marks>0 && marks<=23){
//     console.log("FAIL")
// }
// else{
//     console.log("A")
// }


//odd even logic
// let num=27;
// if(num%2==0 && num>0){
//     console.log("Even number")
// }
// else if(num%2!=0){
//     console.log("Odd Number")
// }
// else{
//     console.log("number is zero")
// }


// let num1=2;
// switch(num1){
//     case 1:
//         console.log("It is one")
//         break;
//     case 2:
//         console.log('it is two')
//         break;
//     case 3:
//         console.log("it is three")
//         break;
//     default:
//         console.log("Not from above options")
// }


let amount=399;
let discount=0;
switch(true){
    case (amount>=299):
        discount=20;
        break;
    case (amount>=199 && amount<299):
        discount=14;
        break;
    case (amount>=99 && amount<199):
        discount =9;
        break;
    
}
console.log(discount);