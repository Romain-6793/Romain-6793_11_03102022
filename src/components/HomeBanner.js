
import homeBackground from '../assets/home-background.png'
import '../styles/HomeBanner.css'

function HomeBanner() {
    return (
        <div className="homeBanner">
            <img src={homeBackground} alt="bord de mer exotique" className="homeBanner-bg">
            </img>
            <div className="homeBanner-layer"></div>
            <span className="homeBanner-text">Chez vous, partout et ailleurs</span>
        </div>
    )
}

export default HomeBanner