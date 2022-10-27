import '../styles/Footer.css'
import footerLogo from '../assets/footer-logo.svg'

function Footer() {
    return (
        <footer className="footer">
            <img src={footerLogo} alt="logo de kasa" className="footer-logo"></img>
            <span className="footer-subtitle">© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer