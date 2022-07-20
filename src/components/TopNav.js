import React from "react";

function TopNav() {
    return (
        <div className="topnav">
            <h1 className="j-logo" onClick={() => { document.getElementById('page-top').scrollIntoView(true) }}><img alt='Jheyzelle logo' src={require('../assets/images/jheyzelle-logo.gif')} draggable='false'></img></h1>

            <ul className="nav-list">
                <li title='About' onClick={() => { document.getElementById('anchor-about').scrollIntoView(true) }}></li>
                <li title='Projects' onClick={() => { document.getElementById('anchor-projects').scrollIntoView(true) }}></li>
                <li title='Contact' onClick={() => { document.getElementById('anchor-contact').scrollIntoView(true) }}></li>

            </ul>

        </div>
    )
}

export default TopNav
