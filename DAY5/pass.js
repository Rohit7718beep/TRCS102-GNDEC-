

 function togglepass(){
    let input=document.querySelector("#password")
if(input.type==="text"){
    input.type="password";
}
else{
    input.type="text"
}
}

function greetings(){
    //  let userinput= document.querySelector("#Name");
    //  console.log("welcome "+ userinput.value)

    let userinput=document.querySelector("#Name").value;
    let myheading=document.querySelector("#display")
    myheading.innerText="welcome " + userinput
     
}

