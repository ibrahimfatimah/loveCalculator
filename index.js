
let yourName = document.getElementById("yourname")
let partnersName = document.getElementById("partnersname")
let calculateLove = document.getElementById("calculate-el")
let sumEl = document.getElementById("sum-el")
let randNumber = Math.ceil (Math.random() * 100) + "%"                                         
console.log(randNumber)
let commentEl = document.getElementById("comment-el")


function calculate() {
  sumEl.textContent = randNumber

}

function start() {
    yourName = 0
    sumEl.textContent = 0
}


function commentOut(){
    
if (randNumber > "80%" ) {
    console.log("perfect love!")
}
else if (randNumber >= "50%") {
    console.log("not strong enough, but love still dey!")
}
else if (randNumber < "30%") {
    console.log("no hope!")
}
else if (randNumber < "50%") {
    console.log("hmmmmm, the love is struggling!")
}
}