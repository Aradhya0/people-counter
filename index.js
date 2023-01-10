// document.getElementById("count").innerText = 5

// let bonuspoints = 50

// bonuspoints = bonuspoints + 50 

// bonuspoints = bonuspoints - 75

// bonuspoints = bonuspoints + 45 

// console.log(bonuspoints)
// let countEl = document.getElementById("count-el")
// console.log(countEl)


// let count = 0

// function increment (){
//     count = count + 1
//     countEl.innerText = count
// }
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
function decrement() {
    count = count - 1
    countEl.innerText = count
}

function save(){
    let save = count + " - "
    saveEl.textContent += save
}
function reset(){
    countEl.textContent = 0
    count = 0   
}