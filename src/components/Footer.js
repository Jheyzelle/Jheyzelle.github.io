import React from "react";

function Footer() {
    return (
        <footer className="nav-section section-footer">
            <div id="to-top-link" onClick={() => { document.getElementById('page-top').scrollIntoView(true) }}>
                <div id="to-top"></div>
                <p>Return to top</p>
            </div>
            <p id="f-cr">&copy; 2023 Jheyzelle</p>
        </footer>


    )
}

export default Footer
