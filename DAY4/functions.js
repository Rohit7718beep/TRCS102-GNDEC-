function print(){
    console.log("it is a function")
}

print();

function add(a,b){
    return a+b;
}
console.log(add(3,4))


function square(num){
    return num*num;
}
console.log(square(34));



// nested functions
function nested(add){
    return(add+2);
}

console.log(nested)
let iseven=false;
function checkeven(a){
    if(a%2==0){
        iseven=true;
    }
}

checkeven(9)
console.log(iseven)
checkeven(10)
console.log(iseven)

// ARROW FUNCTIONS
const message = ()=>{
    console.log("hello")
}
message();

const addition  = (a,b) =>{
    return a+b;
}

console.log(addition(2,3))


