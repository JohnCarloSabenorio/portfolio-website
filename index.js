checkbox = document.getElementById("check");


function handleResize(){
    if(window.innerWidth > 680){
        checkbox.checked = false;
    }
    
}

window.addEventListener("resize", handleResize);