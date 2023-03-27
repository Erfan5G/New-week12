const buttonref = document.querySelector("button") ; 
function alerter () {
    alert("You clicked me!") 
    // buttonref.removeEventListener("click",alerter)

}

buttonref.addEventListener ("click",alerter , {once:true}) 
// buttonref.addEventListener("click")