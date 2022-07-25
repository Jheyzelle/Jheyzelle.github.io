import React, { useEffect } from "react";

function TopNav() {

    const elmDetect = '#landing-logo'
    const elmTarget = '.topnav'

    function toggleNav() {
        let target = document.querySelector(elmTarget)
        // close mobile nav on scroll or resize
        if (!target.classList.contains('nav-closed')) toggleCollapseNav()

        if (isWindowSmall()) {
            target.style.display = "flex"
        } else {
            if (isOnLanding())
                target.style.display = "none"
            else
                target.style.display = "flex"
        }

    }

    function isOnLanding() {
        let elm = document.querySelector(elmDetect);
        let bounds = elm.getBoundingClientRect();
        let w = elm.offsetHeight;
        let h = elm.offsetWidth;

        if (bounds.top >= -h
            && bounds.left >= -w
            && bounds.right <= (window.innerWidth || document.documentElement.clientWidth) + w
            && bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight) + h) {
            // in view
            return true
        } else {
            // not in view
            return false
        }
    }

    function isWindowSmall() {
        if (window.innerWidth < 600) {
            return true
        } else {
            return false
        }
    }

    function toggleCollapseNav() {

        let nav = document.querySelector(elmTarget)
        let btn = document.querySelector('#btn-toggle-nav')

        function openNav() {
            nav.classList.remove('nav-closed')
            btn.innerHTML = '^o^'
        }

        function closeNav() {
            nav.classList.add('nav-closed')
            btn.innerHTML = '^-^'
        }

        nav.classList.contains('nav-closed') ? openNav() : closeNav()
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleNav)
        window.addEventListener('resize', toggleNav)
    })

    return (
        <div className="topnav nav-closed">
            <button id='btn-toggle-nav' onClick={toggleCollapseNav}>^-^</button>
            <div className="topnav-content">
                <h1 className="j-logo" onClick={() => { document.getElementById('page-top').scrollIntoView(true); toggleCollapseNav() }}><img alt='Jheyzelle logo' src={require('../assets/images/jheyzelle-logo.gif')} draggable='false' className='anm'></img></h1>

                <ul className="nav-list">
                    <li title='About' onClick={() => { document.getElementById('anchor-about').scrollIntoView(true); toggleCollapseNav() }} className='anm'></li>
                    <li title='Projects' onClick={() => { document.getElementById('anchor-projects').scrollIntoView(true); toggleCollapseNav() }} className='anm'></li>
                    <li title='Contact' onClick={() => { document.getElementById('anchor-contact').scrollIntoView(true); toggleCollapseNav() }} className='anm'></li>

                </ul>
            </div>

        </div>
    )
}

export default TopNav
