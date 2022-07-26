import React from "react";

function Projects() {
    return (
        <div id='anchor-projects' className="nav-section section-projects">
            <h2 title='Projects' className='section-heading head-projects anm'></h2>
            <div title='Contact Me' className="prompt-next-sec next-sec" onClick={() => { document.getElementById('anchor-contact').scrollIntoView(true) }} ><p>↧</p></div>
        </div>
    )
}

export default Projects
