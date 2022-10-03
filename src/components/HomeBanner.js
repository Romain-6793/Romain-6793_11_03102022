
import homeBackground from '../assets/home-background.png'
import '../styles/HomeBanner.css'

function HomeBanner() {
    return (
        <div className="homeBanner">
            <div className="homeBanner-bg">
                <img src={homeBackground} alt="bord de mer exotique" className="homeBanner-image">
                </img>
                <div className="homeBanner-layer"></div>
                <span className="homeBanner-text">Chez vous, partout et ailleurs</span>
            </div>
        </div>
    )
}

export default HomeBanner