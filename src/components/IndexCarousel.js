import "../App.css"
import React, { useEffect } from "react";


export const IndexCarousel = () => {

    let shuffleTest = () => {
        let cardsgroup = document.querySelector(".indexcar-container");

        let curr = cardsgroup.removeChild(cardsgroup.lastElementChild)
        curr.classList.add("indextoback")
        cardsgroup.prepend(curr)
        // console.log(cardsgroup.lastElementChild.classList)
    }

    // let bringToTop = (card) => {
    //     let cardsgroup = document.querySelector(".indexcar-container");
    // }

    function bringToTop() {
        let cardsgroup = document.querySelector(".indexcar-container");

        if (window.innerWidth < 600) {

            if (!(cardsgroup.firstElementChild.dataset.sect == "intro")) {
                let curr = cardsgroup.removeChild(cardsgroup.lastElementChild)
                cardsgroup.prepend(curr)
            }

            cardsgroup.removeEventListener('click', shuffleTest, false)
        } else {
            // if(cardsgroup.data.())
            cardsgroup.addEventListener('click', shuffleTest, false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', bringToTop)
        bringToTop()
    })

    return (
        <div className="ind-wrap">
            <div className="indexcar-container">
                <div className="indexcard card1" data-sect="skills">
                    <h2>Technical Skills</h2>
                    <div className="tech-skills-sec">
                        <figure><figcaption>Software Development</figcaption>
                            <ul>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>HTML/CSS</li>
                                <li>Java</li>
                                <li>C#</li>
                                <li>SQL</li>
                                <li>ReactJS</li>
                                <li>Git Bash</li>
                                <li>Bootstrap</li>
                                <li>Wordpress</li>
                                <li>Google Firebase</li>
                            </ul>
                        </figure>
                        <figure><figcaption>Digital Design</figcaption>
                            <ul>
                                <li>DaVinci Resolve</li>
                                <li>LumaFusion</li>
                                <li>Procreate</li>
                                <li>Figma</li>

                                <li>Adobe
                                    <ul id="adobe-list">

                                        <li>Photoshop</li>
                                        <li>Illustrator</li>
                                        <li>Premiere</li>
                                        <li>XD</li>
                                        <li>InDesign</li>
                                        <li>Animate</li>
                                        <li>Fresco</li>

                                    </ul>
                                </li>
                            </ul>
                        </figure>
                    </div>
                </div>
                <div className="indexcard card2" data-sect="intro">
                    <h2>Intro</h2>
                    <p>Front end development allows me to combine my passion for art and code by designing innovative digital content.</p>

                    <p>I graduated from the University of Toronto with a major in Communication, Culture, Information, and Technology <abbr title='Communication, Culture, Information, and Technology'>(CCIT)</abbr> and minors in <span className='ab-cs'>Computer Science <abbr title='Computer Science'>(CS)</abbr></span> and Professional Writing and Communications <abbr title="Professional Writing and Communications">(PWC)</abbr>.</p>

                    <p>I enjoy hands-on and creative activities. I am interested in web, graphic, user experience & interface, and game design, animation, videography and videoediting, and software development.</p>

                    <p>During my free time, I like to sketch, mainly people and objects around me. I enjoy singing and play a few instruments including the guitar and kalimba. I also like collecting memories through photos and videos to share with friends and family.</p>
                </div>
            </div>
        </div>
    )
}