let menu = document.querySelector("#menubar")
let navbar = document.querySelector(".navbar")

menu.addEventListener("click", () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})



const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}


function blurFunc(){
    let parent = this.parentNode;
    parent.classList.remove("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
    parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
});



