import React, { useEffect } from "react";

function TopNav() {

    const elmDetect = '#landing-logo'
    const elmTarget = '.topnav'

    function toggleNav() {

        let elm = document.querySelector(elmDetect);
        let bounds = elm.getBoundingClientRect();
        let w = elm.offsetHeight;
        let h = elm.offsetWidth;

        let target = document.querySelector(elmTarget)

        if (bounds.top >= -h
            && bounds.left >= -w
            && bounds.right <= (window.innerWidth || document.documentElement.clientWidth) + w
            && bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight) + h) {
            // in view
            target.style.display = "none"
        } else {
            // not in view
            target.style.display = "flex"
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleNav)
    })

    return (
        <div className="topnav">
            <h1 className="j-logo" onClick={() => { document.getElementById('page-top').scrollIntoView(true) }}><img alt='Jheyzelle logo' src={require('../assets/images/jheyzelle-logo.gif')} draggable='false' className='anm'></img></h1>

            <ul className="nav-list">
                <li title='About' onClick={() => { document.getElementById('anchor-about').scrollIntoView(true) }} className='anm'></li>
                <li title='Projects' onClick={() => { document.getElementById('anchor-projects').scrollIntoView(true) }} className='anm'></li>
                <li title='Contact' onClick={() => { document.getElementById('anchor-contact').scrollIntoView(true) }} className='anm'></li>

            </ul>

        </div>
    )
}

export default TopNav
