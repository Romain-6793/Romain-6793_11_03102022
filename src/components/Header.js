
import React from 'react';
import logo from '../assets/logo.svg'
import '../styles/Header.css'



function Header() {
    return (
        <div className="header-flex">
            <img src={logo} alt="logo de kasa" className="kasa-logo"></img>
            <nav className="header-nav">
                <a href="home" className="home-link" >Accueil</a>
                <a href="about" className="about-link">A propos</a>
            </nav>
        </div>
    )
}

export default Header