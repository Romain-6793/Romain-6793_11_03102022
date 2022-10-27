
import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import '../styles/Header.css'



function Header() {
    return (
        <header className="header-flex">
            <img src={logo} alt="logo de kasa" className="kasa-logo"></img>
            <nav className="header-nav">
                <Link to="home" className="home-link" >Accueil</Link>
                <Link to="about" className="about-link">A propos</Link>
            </nav>
        </header>
    )
}

export default Header