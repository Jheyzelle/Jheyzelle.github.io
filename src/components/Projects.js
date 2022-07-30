import React, { useEffect } from "react";

function Projects() {

    let liHeight = 100;
    let _sel = undefined;

    const projListRaw = [
        {
            title: 'MangoBirds',
            img: require('../assets/images/projects/mangobirds.png'),
            desc: 'MangoBirds is a website for a fictional bird breeding business. The idea for this project is inspired by a friend who owns many lovely birds. This is the capstone project for CCT460 (Advanced Web Design) at Sheridan. The original website was created using Wordpress and hosted with Firebird Sheridan.',
            extldesc: 'MangoBirds Static Website',
            extl: 'https://jheyzelle.github.io/CCTx60/460capstone/screencaps/'
        },
        {
            title: 'DreamCode',
            img: require('../assets/images/projects/dreamcode.png'),
            desc: 'DreamCode is an online learning platform for new programmers that teaches the basic computer science concepts using the Python programming language. Users will learn the concepts and apply their knowledge through our minigames and quizzes. This web application was the main project for the 2021 CSC301 Software Engineering course at UTM. In a team of 7, we practiced agile project development, with consistent scrum meetings and biweekly feature presentations. My main role was front-end design.',
            extldesc: 'DreamCode Website',
            extl: 'https://github.com/Jheyzelle/DreamCode'
        },
        {
            title: 'Graphic Design Portfolio',
            img: require('../assets/images/projects/graphicdesign.png'),
            desc: 'This personal brand portfolio is the final project for CCT260, an introductory course to web culture and design at Sheridan College.',
            extldesc: 'Portfolio',
            extl: 'https://jheyzelle.github.io/CCTx60/260a2/'
        },
        {
            title: 'Photography Portfolio',
            img: require('../assets/images/projects/photography.png'),
            desc: 'This portfolio uses the Bootstrap framework for responsive web design and website compatibility with multiple devices and screen sizes.',
            extldesc: 'Portfolio',
            extl: 'https://jheyzelle.github.io/CCTx60/360a2/'
        },
        {
            title: 'Adobe XD Grocery Kiosk',
            img: require('../assets/images/projects/kiosk.png'),
            desc: 'During the pandemic, we observed our local grocery stores and noticed that there were fewer employees, and customers spent more time searching aisles for products they needed. Using FreshCo as an example, my team designed the user interface for grocery store kiosks. The application makes it easy to for customers to view and search the store inventory. The product information page shows the product image, description, price, and precise location in store. The user can create a list of the products and information, and scan a QR code to send the list to their phone, to minimize going back and forth to search for multiple items. The grocery inventory kiosk aims to help customers find their products faster to minimize the time spent outside for safety during the pandemic.',
            extldesc: 'FreshCo Kiosk Interface on Adobe XD',
            extl: 'https://xd.adobe.com/view/2d806b60-5608-4360-999b-56d57e06760e-78d3/'
        },
        {
            title: 'Adobe XD Planit',
            img: require('../assets/images/projects/planit.png'),
            desc: '',
            extldesc: 'Planit on Adobe XD',
            extl: 'https://xd.adobe.com/view/7c1222fe-1a2c-4239-971f-41532c520126-2941/'
        },
        {
            title: 'Adobe XD App Manager',
            img: require('../assets/images/projects/appmngr.png'),
            desc: '',
            extldesc: 'Start Menu App Manager on Adobe XD',
            extl: 'https://xd.adobe.com/view/85ce8dda-5192-40d6-8932-98c0ebbb15d0-d09d/'
        },
    ]

    function autoScroll() {
        let ind = parseInt(_sel.dataset.ind) + 1
        if (ind >= projListRaw.length) {
            ind = 0
        }

        console.log(ind)
        let projDomList = document.querySelector('.proj-list ul').children
        projDomList[ind].dispatchEvent(new Event("click"));
    }

    function updateUnfocusedSlides(currentIndex) {
        let projDomList = document.querySelector('.proj-list ul').children

        // convert data string to int for comparison
        currentIndex = parseInt(currentIndex)

        for (let i = 0; i < projDomList.length; i++) {

            if (i != currentIndex) {
                if (projDomList[i].classList.contains('sel'))
                    projDomList[i].classList.remove('sel')
            }
        }
    }

    function updateFocusedSlideContent(ind) {
        let pic = document.querySelector('.slide-img')
        let h3 = document.querySelector('.proj-carousel .slide-title')
        let desc = document.querySelector('.proj-carousel .slide-desc')
        let link = document.querySelector('.proj-carousel .slide-extlink a')

        pic.src = projListRaw[ind]["img"]
        h3.innerHTML = projListRaw[ind]['title']
        desc.innerHTML = projListRaw[ind]['desc']
        link.innerHTML = 'View ' + projListRaw[ind]['extldesc']
        link.href = projListRaw[ind]['extl']

    }

    function setFocusedSlide() {

        if (!this.classList.contains('sel')) {
            let slide = document.querySelector('.proj-carousel')
            let projsContain = document.querySelector('.proj-list ul')

            let ty = projsContain.style.transform.split('px, ')[1]

            let clickedInd = parseInt(this.dataset.ind)
            let selInd = parseInt(_sel.dataset.ind)

            if (ty) {
                let tyNew = parseInt(ty)
                let diff = Math.abs(clickedInd - selInd)

                if (clickedInd > selInd) {

                    tyNew -= (liHeight * diff)

                } else if (clickedInd < selInd) {

                    tyNew += (liHeight * diff)
                }

                projsContain.style.transform = `translate3d(0, ${tyNew}px, 0)`

            } else projsContain.style.transform = `translate3d(0px, 85px, 0px)`

            updateFocusedSlideContent(this.dataset.ind)

            _sel = this
            this.style.removeProperty('background')
            this.classList.add('sel')
            updateUnfocusedSlides(this.dataset.ind)
        }

    }

    function createProjList() {
        // create project list from js object list
        let plist = document.querySelector('.proj-list ul')

        for (let i = 0; i < projListRaw.length; i++) {
            let li = document.createElement('li')
            let h3 = document.createElement('h3')

            h3.innerHTML = projListRaw[i]['title']

            li.dataset.ind = i
            li.appendChild(h3)
            plist.appendChild(li)
            li.addEventListener('click', setFocusedSlide)
            li.style.backgroundImage = 'url("./assets/images/projects/1-mangobirds.png")'
            // initialize first slide
            if (i == 0) {
                _sel = li
                li.dispatchEvent(new Event("click"));
            }
        }
    }

    useEffect(() => {
        createProjList()
        setInterval(autoScroll, 10000);
    })

    return (
        <div id='anchor-projects' className="nav-section section-projects">
            <h2 title='Projects' className='section-heading head-projects anm'></h2>
            <div className="proj-content">
                <div className="proj-carousel">
                    <div className="slide">
                        <img alt='Project image' className="slide-img" src=''></img>
                        <div className="text">
                            <h3 className="slide-title"></h3>
                            <p className="slide-desc"></p>
                            <p className="slide-extlink"><a></a></p>
                        </div>

                    </div>
                </div>
                <div className="proj-list">
                    <ul>
                    </ul>
                </div>
            </div>

            <div title='Contact Me' className="prompt-next-sec next-sec" onClick={() => { document.getElementById('anchor-contact').scrollIntoView(true) }} ><p>↧</p></div>
        </div>

    )
}

export default Projects
