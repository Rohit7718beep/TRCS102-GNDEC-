let arr=[23,45,67,21,61,56]

// let new_arr=arr.map((i)=>i*i);
// console.log(new_arr)

// let ne_arr=arr.map((i)=>i+i)
// console.log(ne_arr)

//Filter option in js
//Greater than 40
let arr2=arr.filter((i)=>(i>40));
console.log(arr2)


//finding even number in array
let arr3=arr.filter((i)=>(i%2==0));
console.log(arr3)

let arr4=arr.find((num)=> num===61)
console.log(arr4)

console.log(arr.slice(1,4))

arr.splice(1,2)
console.log(arr)