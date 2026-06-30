let isDark=false;
function toggletheme(){
    
    let heading = document.querySelector("#text");
    if(isDark){
        document.body.style.backgroundColor="white"
        heading.style.color="black";
        isDark=false;

    }
    else{
        document.body.style.backgroundColor="black"
        heading.style.color="white";
        isDark=true;
    }
}