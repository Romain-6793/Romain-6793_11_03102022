import logo from '../assets/logo.svg'
import '../styles/Header.css'

function Header() {
    return (
        <div className="header-flex">
            <img src={logo} alt="logo de kasa" className="kasa-logo"></img>
            <nav className="header-nav">
                <a href="default.htm" className="home-link" >Accueil</a>
                <a href="default.htm" className="about-link">A propos</a>
            </nav>
        </div>
    )
}

export default Header