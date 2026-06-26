const arr=["A","B",true,34,321,34.6]

console.log(arr[2])

arr.push(34);
console.log(arr)

//unshift for addition at starting
arr.unshift("rohit")
console.log(arr)



//deleting an Element
//from last

arr.pop();
arr.pop();
console.log(arr)


//deleting an element from starting of the array
arr.shift();
console.log(arr)


//finding index of the element present in the array

console.log(arr.indexOf("B"))


//include means whether the element is present in the array or not

console.log(arr.includes("A"))
console.log(arr.includes(343))

//checking length of the given array

let size=arr.length;
console.log(size);


//traversing an array

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}


let gfive=[23,4,5,67,2,1,78]
console.log("only greater than five")
for(let i=0;i<gfive.length;i++){
    if(gfive[i]>5){
        console.log(gfive[i])
    }
}

