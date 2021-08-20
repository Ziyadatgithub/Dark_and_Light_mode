const body = document.querySelector("body")
const dark = document.querySelector("#dark")

let lightmode = true

dark.addEventListener("click",function(){
    if(lightmode){
        body.style.backgroundColor="black"
        dark.value = "Light mode"
        dark.style.backgroundColor="white"
        dark.style.color="black"
        lightmode = false
    }
    else{
        body.style.backgroundColor="white"
        dark.value = "Dark mode"
        dark.style.backgroundColor="black"
        dark.style.color="white"
        lightmode = true
    }
})