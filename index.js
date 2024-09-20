checkbox = document.getElementById("check");


function handleResize(){
    if(window.innerWidth > 1000){
        checkbox.checked = false;
    }
    
}

window.addEventListener("resize", handleResize);