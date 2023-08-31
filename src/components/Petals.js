// landing page petals deco
export const statePetals = true

export function petalsFx() {
    let cont = document.querySelector("#petals-cont")
    cont.style.opacity = "0.3"
    let numPetalSets = 15
    let setGapSize = 50
    let speed = 1
    let [minPetalSize, maxPetalSize] = [0.7, 2]

    let bgPos = ["top left", "top center", "top right",
    "center left", "center", "center right", 
    "bottom left", "top center", "top right"]
    // petalsSet.style.border = '1px solid black'

    let getRandom=(min, max)=> {
        return Math.random() * (max - min + 1) + min 
    }

    let getRandomInt=(max)=> {
        return Math.floor(Math.random() * max);
    }
    
    
    for (let i = 0; i < numPetalSets; i ++) {
        let petalsSet = document.createElement('div')
        cont.appendChild(petalsSet)
        petalsSet.classList.add('petals-set')

        // let dir = ((getRandomInt(2) == 0) ? '' : 'reverse')

        let leftPos = (-i+10) * setGapSize + 'px'

        // console.log(leftPos)
        petalsSet.style.left = leftPos
        let scaleSize = getRandom(minPetalSize, maxPetalSize)

        // console.log(scaleSize)
        for (let j = 0; j < 9; j ++) {
            let petal = document.createElement('div')
            petalsSet.appendChild(petal)
            petal.classList.add('petals')

            petal.style.backgroundPosition = bgPos[j]
            petal.style.animation = `animate-petals ease-in infinite`
            // petal.style.backgroundColor = "pink"

            petal.style.animationDuration = (Math.floor(getRandom(10, 20)))*speed + 's'
            petal.style.animationDelay = getRandom(1, 3) + 's'

            if (scaleSize < 0.9 || scaleSize > 2.4 ) {
                petal.classList.add('blurPetal')

            }
        }
        petalsSet.style.transform = `scale(${scaleSize})`

    }
}

export function togglePetals() {
    let pcont = document.querySelector('#petals-cont')
    if (statePetals) {
        pcont.style.animation = 'fade-out 0.3s linear forwards'
        statePetals= false;
    }
    else {
        pcont.style.animation = 'fade-in 0.3s linear forwards'
        statePetals= true;
    }
}