import React from "react";

function Contact() {

    return (
        <div id='anchor-contact' className="nav-section section-contact">
            <h2 title='Contact' className='section-heading head-contact'></h2>
            <a href="mailto:jzeldiaz@gmail.com" className='contact-email'>Email: jzeldiaz@gmail.com</a>
            <a href="mailto:jzeldiaz@gmail.com" id='btn-reqres'><img alt='Request resume' src={require('../assets/images/requestresume.png')}></img></a>
            <p className='soc-inv'>Check out my socials!</p>
            <ul className="socials">
                <li className="socials-anim" title='Github: Jheyzelle'><a href='https://github.com/Jheyzelle/' target={'_blank'}><img alt='Github: Jheyzelle' src={require('../assets/images/con-github.png')} draggable='false'></img></a></li>
                <li className="socials-anim" title='Youtube: JheyArts'><a href='https://youtube.com/JheyArts/' target={'_blank'}><img alt='Youtube: JheyArts' src={require('../assets/images/con-youtube.png')} draggable='false'></img></a></li>
                <li className="socials-anim" title='Instagram: Jheyzelle'><a href='https://instagram.com/Jheyzelle/' target={'_blank'}><img alt='Instagram: Jheyzelle' src={require('../assets/images/con-instagram.png')} draggable='false'></img></a></li>
                <li className="socials-anim" title='Procreate: Jheyzelle'><a href='https://folio.procreate.art/Jheyzelle/' target={'_blank'}><img alt='Procreate: Jheyzelle' src={require('../assets/images/con-procreate.png')} draggable='false'></img></a></li>
                <li className="socials-anim" title='Twitch: Jheyzelle'><a href='https://twitch.com/Jheyzelle/' target={'_blank'}><img alt='Twitch: Jheyzelle' src={require('../assets/images/con-twitch.png')} draggable='false'></img></a></li>
            </ul>

        </div>
    )
}

export default Contact
