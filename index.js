let count = 0
let numEl = document.getElementById("increment")

function inc(){
    count += 1
    numEl.innerText = count
}

let saveEl = document.getElementById("entries")
function save(){
    
    let countStr = " " + count + "-"
    saveEl.textContent += countStr
    numEl.textContent = 0
    count = 0
}