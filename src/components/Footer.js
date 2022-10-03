import '../styles/Footer.css'
import footerLogo from '../assets/footer-logo.svg'

function Footer() {
    return (
        <div>
            <div className="footer">
                <img src={footerLogo} alt="logo de kasa" className="footer-logo"></img>
                <span class="footer-subtitle">© 2020 Kasa. All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer