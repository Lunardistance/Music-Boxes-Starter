// Variable Definitions
var boxes=document.querySelectorAll(".box")
var notes={
    c: document.querySelector("#cAudio"),
    d: document.querySelector("#dAudio"),
    e: document.querySelector("#eAudio"),
    f: document.querySelector("#fAudio"),
    g: document.querySelector("#gAudio"),
    a: document.querySelector("#aAudio"),
    b: document.querySelector("#bAudio"),
}


// Function Definitions
function playNote(letter){
    notes[letter].currentTime=0
    notes[letter].play()
}



// Call the Functions
boxes.forEach(function(box){
box.addEventListener(`mousedown`, function(){
    console.log(box.id)
    playNote(box.id)
})
})

document.addEventListener(`keydown`, function(event){
if(event.key=="c"){
playNote("c")
}

})

document.addEventListener(`keydown`, function(event){
if(event.key=="d"){
    playNote("d")
}
})

document.addEventListener(`keydown`, function(event){
    if(event.key=="e"){
        playNote("e")
    }
})

document.addEventListener(`keydown`, function(event){
    if(event.key=="f"){
        playNote("f")
    }
})

document.addEventListener(`keydown`, function(event){
    if(event.key=="g"){
        playNote("g")
    }
})

document.addEventListener(`keydown`, function(event){
    if(event.key=="a"){
        playNote("a")
    }
})

document.addEventListener(`keydown`, function(event){
    if(event.key=="b"){
        playNote("b")
    }
})