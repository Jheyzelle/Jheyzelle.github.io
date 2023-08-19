import React, { useEffect } from "react";
import { IndexCarousel } from "./IndexCarousel";

function About() {
    function animateAvi() {

        let cs = document.querySelector('.ab-cs')
        let jImg = document.querySelector('#j-avi img')

        function onCSmOver() {
            jImg.style.animation = 'j-avi-r3-blink 0.645s steps(1) 2'
            setTimeout(() => {
                jImg.style.animation = 'j-avi-sleep 0.3s steps(2) reverse infinite'
            }, 1290)
        }

        function onCSmOut() {
            setTimeout(() => {
                jImg.removeAttribute('style')
            }, 2000)

        }

        cs.addEventListener('mouseover', onCSmOver)
        cs.addEventListener('mouseout', onCSmOut)

        function onAnimOver() {
            jImg.style.animation = 'j-avi-r1-blink 0.645s steps(1) 2'
            setTimeout(() => {
                jImg.removeAttribute('style')
            }, 1290)
        }

        jImg.addEventListener('mouseover', onAnimOver)
    }

    useEffect(() => {
        animateAvi()
    }, [])

    return (
        <div id='anchor-about' className="nav-section section-about">
            <h2 title='About' className='section-heading head-about anm'></h2>
            <div className="ab-content-container">
                <div id="j-avi"><img alt="Jheyzelle Avatar" src={require('../assets/images/jheyzelle-avi-500.png')} draggable='false' className='anm'></img></div>
                <IndexCarousel></IndexCarousel>

            </div>
            <div title='View My Projects' className="prompt-next-sec next-sec" onClick={() => { document.getElementById('anchor-projects').scrollIntoView(true) }} ><p>↧</p></div>
        </div>
    )
}

export default About
