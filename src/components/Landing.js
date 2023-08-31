import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import { petalsFx, statePetals, togglePetals } from "./Petals";

function Landing() {

    async function loadLanding() {

        countDown(100, document.querySelector('#load-percent'), 16)
        petalsFx()
        await wait(2000)

        loaded()
        document.querySelector('#load-percent').remove()
        await wait(200)

        // ===

        let landingLogo = document.querySelector('#landing-logo')
        let landIntro = document.querySelector('#landing-intro')
        let landRoles = document.querySelector('.roles')
        let nextSec = document.querySelector('.prompt-next-sec')

        await wait(1000)
        typeText(['Hello there!', 'I am'], '#landing-intro', 100)

        await wait(3700)
        landingLogo.style.visibility = 'visible'
        await wait(3300)
        landingLogo.src = require('../assets/images/jheyzelle-logo.gif')

        await wait(500)
        // fade out welcome
        landIntro.children[0].style.animation = 'fadeout-slide-left 2s 0.5s ease-in-out 1 forwards'
        landIntro.children[1].style.animation = 'fadeout-slide-left 2s 0.7s ease-in-out 1 forwards'
        // fade in roles text
        landRoles.style.opacity = '1'
        landRoles.children[0].style.animationPlayState = 'running'
        landRoles.children[0].style.animationDelay = '0.2s'
        landRoles.children[1].style.animationPlayState = 'running'
        landRoles.children[1].style.animationDelay = '0.5s'
        landRoles.children[2].style.animationPlayState = 'running'
        landRoles.children[2].style.animationDelay = '0.9s'

        await wait(3000)
        nextSec.style.visibility = 'visible'
        nextSec.style.animation = 'prompt-anmin 0.3s ease-in forwards'
        await wait(300)
        nextSec.style.removeProperty('animation')
    }

    // =====
    async function countDown(startingNumber, parent, time) {
        for (let i = startingNumber; i >= 0; i--) {
            parent.innerHTML = i + "%";
            await wait(time)
        }
    }

    async function loaded() {
        let elm = document.querySelector('#site-loading')
        elm.style.display = 'none'
    }

    // =====
    async function typeText(lines, parentTag, timePerChar) {

        let container = document.querySelector(parentTag)

        for (let i = 0; i < lines.length; i++) {
            // line
            let line = lines[i]
            let p = document.createElement('p')
            container.appendChild(p)

            for (let x = 0; x < line.length; x++) {
                p.innerHTML += line[x]
                await wait(timePerChar)
            }
            await wait(1000)
        }
    }

    useEffect(() => {
        loadLanding()
    })

    return (
        <div className="nav-section section-landing">

            <div className="landing-content">

                <img id="site-loading" src={require('../assets/images/rough-birdload.gif')} alt="Bird loading website" />
                <span id="load-percent"></span>

                <div id="landing-intro" className="fade-slide-left">
                    {/* insert animated type text */}
                </div>

                <img alt="Jheyzelle logo" id='landing-logo' src={require('../assets/images/j-logo-write.gif')} draggable='false'></img>
                <div className="roles">
                    <p>Artist</p>
                    <p>Designer</p>
                    <p>Developer</p>
                </div>
                <div id="petals-cont">
                </div>

            </div>

            <div title='Read About Me' className="prompt-next-sec" onClick={() => { document.getElementById('anchor-about').scrollIntoView(true) }} ><p>↧</p></div>
        </div>
    )
}

export default Landing
