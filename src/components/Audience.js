let audlst = []

for (let i = 0; i < 7; i++) {
    let aud = document.createElement('img')
    aud.setAttribute('scr', "../assets/images/aud.gif")
    audlst.push(aud)
}
async function pushaud() {
    // console.log("hovered")

    this.style.animation = 'audfall 0.5s ease-in forwards'

    await wait(10000)
    this.style.animation = 'audreturn 1s ease-out forwards'
}

for (let i = 0; i < audlst.length; i++) {
    // audlst[i].style.background = 'green'
    audlst[i].addEventListener('mouseover', pushaud)

}

