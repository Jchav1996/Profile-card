const firstname = document.querySelector("#firstname")
firstname.addEventListener("input", function(){
    document.querySelector("#forname").innerText = firstname.value
})

const lastname = document.querySelector("#lastname")
lastname.addEventListener("input", function(){
    document.querySelector("#forlastname").innerText = lastname.value
})

const city = document.querySelector("#city")
city.addEventListener("input", function(){
    document.querySelector("#forcity").innerText = city.value
})

const usa = document.querySelector("#usa")
usa.addEventListener("input", function(){
    document.querySelector("#forusa").innerText = usa.value
})

const position = document.querySelector("#position")
position.addEventListener("input", function(){
    document.querySelector("#forRole").innerText = position.value
})

 const cover = document.querySelector("#cover")
 cover.addEventListener("change", function(){
    if (cover.value === "no") {
        document.querySelector(".cover").style.display = 'none'
    } else {
        document.querySelector(".cover").style.display = 'block'

    }
 })

 const sm = document.querySelector("#sm")
 sm.addEventListener("input", function(){
    if (sm.value === "Null") {
        document.querySelector(".positionL").style.display = 'none'
    } else {
        document.querySelector(".positionL").style.display = 'block'
    }
    if (sm.value === "Null") {
        document.querySelector(".positionR").style.display = 'none'
    } else {
        document.querySelector(".positionR").style.display = 'block'
    }  
    
})

