const buttonref = document.querySelector("button") ; 
function alerter () {
    alert("You clicked me!") 
    // buttonref.removeEventListener("click",alerter)

}

function backgroundclicked () { 
    const backbody = document.querySelector('body')  ; 
    backbody.classList.add("Backpink")
}

function clicked() { 
    if (buttonref.textContent === "Click Me !"){
        buttonref.textContent = "Clicked"
    }
    
    else {
        buttonref.textContent = "Click Me !"
    }   
}

function updatedimage() {
    const image = document.querySelector("img")
    // console.log(image)
    image.setAttribute (
        "src" , 
        "iamges/Shopping-Cart.png"
    )
    image.setAttribute(
        "alt",
        "SHopping cart image"
    )
    image.setAttribute(
        "width" , 
        "50" 
    )
    image.setAttribute(
        "height" ,
        "50" 
    )
}
// buttonref.addEventListener ("click",alerter , {once:true}) 
// buttonref.addEventListener("click")
buttonref.addEventListener('click' , clicked)
buttonref.addEventListener('click' , backgroundclicked)
updatedimage() 
