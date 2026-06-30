let isOn=false;
function changebulb(){
   let offimage= document.querySelector("#imgoff")
   let offtext=document.querySelector("#textoff")

   if(isOn){
    imgoff.src="download (1).jpg"
    offtext.innerText="off";
    isOn=false
   }
   else{
    imgoff.src="download.jpg"
    offtext.innerText="on"
    isOn=true
   }
}
let count=0;
function increment(){
    let like=document.querySelector("#like")
    let head=document.querySelector("#headin")
    count++;
    headin.innerText=count;
}

function decrement(){
    let like=document.querySelector("#like")
    let head=document.querySelector("#headin")
      
    if(count>0){
      count--;
    headin.innerText=count;
   
    }
}
function reset(){
    let like=document.querySelector("#like")
    let head=document.querySelector("#headin")
    count=0;
    headin.innerText=count;
}



