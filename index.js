// const homeScoreBtnOne = document.getElementById("home-score-btn-1")
// const homeScoreBtnTwo = document.getElementById("home-score-btn-2")
// const homeScoreBtnThree = document.getElementById("home-score-btn-3")

let homeScoreEl =document.getElementById("homeScore-el")
let guestScoreEl = document.getElementById("guestScore-el")
let homeScore = 0
let guestScore = 0

function btn1(){
    homeScore = homeScore + 1
    homeScoreEl.innerText = homeScore
}

function btn2(){
    homeScore = homeScore + 2
    homeScoreEl.innerText = homeScore
}

function btn3(){
    homeScore = homeScore + 3
    homeScoreEl.innerText = homeScore
}

function btn4(){
    guestScore = guestScore + 1
    guestScoreEl.innerText = guestScore
}

function btn5(){
    guestScore = guestScore + 2
    guestScoreEl.innerText = guestScore
}

function btn6(){
    guestScore = guestScore + 3
    guestScoreEl.innerText = guestScore
}