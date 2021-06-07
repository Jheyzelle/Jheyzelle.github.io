let i1 = 0
let notesList = ["Coming soon!",
                "It'll be done.",
                "I swear.",
                "That one too.",
                "😅",
                "Come back later!"]
let navItems = document.querySelectorAll(".main-topnav li")

for (let i = 0; i< navItems.length; i++) {
    navItems[i].addEventListener("click", note)
}

function note() {
    
    let note = document.querySelector("#note")
    note.innerHTML = notesList[i1]
    
    i1++
    if (i1 >= notesList.length) i1=0;
}

let logo = document.querySelector("#logo")
logo.addEventListener("click", heart)

function heart() {
    let note = document.querySelector("#note")
    note.innerHTML = "~ jay💤"
}