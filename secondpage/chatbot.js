const smile=document.querySelector("#rade")
const Rade = document.querySelector(".rad")

const Happy=document.querySelector("#happye")
const happye = document.querySelector(".happy")

const Not_bad=document.querySelector("#notte")
const notte = document.querySelector(".not")

const Bad=document.querySelector("#bade")
const bade = document.querySelector(".bad")

const Aweful=document.querySelector("#awefule")
const awefule = document.querySelector(".aweful")

smile.addEventListener('click',()=>{
    Rade.classList.add('active')
    Rade.scrollTop = Rade.scrollHeight;
})
Happy.addEventListener('click',()=>{
    happye.classList.add('active')
})
Not_bad.addEventListener('click',()=>{
    notte.classList.add('active')
})
Bad.addEventListener('click',()=>{
    bade.classList.add('active')
})
Aweful.addEventListener('click',()=>{
    awefule.classList.add('active')
})