import React, { useEffect } from "react";

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

                <div className="ab-text-desc">

                    <p>Front end development allows me to combine my passion for art and code by designing innovative digital content.</p>
                    <p>I graduated from the University of Toronto with a major in Communication, Culture, Information, and Technology <abbr title='Communication, Culture, Information, and Technology'>(CCIT)</abbr> and minors in <span className='ab-cs'>Computer Science <abbr title='Computer Science'>(CS)</abbr></span> and Professional Writing and Communications <abbr title="Professional Writing and Communications">(PWC)</abbr>.</p>
                    <p>During my free time, I like to sketch, mainly people and objects around me. I enjoy singing and play a few instruments including the guitar and kalimba. I also like collecting memories through photos and videos to share with friends and family.</p>
                </div>
            </div>
            <div title='View My Projects' className="prompt-next-sec next-sec" onClick={() => { document.getElementById('anchor-projects').scrollIntoView(true) }} ><p>↧</p></div>
        </div>
    )
}

export default About
