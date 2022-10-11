
import { Link } from 'react-router-dom'
import homeBackground from '../../assets/home-background.png'
import '../../styles/homepage/HomeBanner.css'


function HomeBanner() {
    return (
        <div className="homeBanner-bg">
            <Link to="*">
                <img src={homeBackground} alt="bord de mer exotique" className="homeBanner-image">
                </img>
                <div className="homeBanner-layer"></div>
                <span className="homeBanner-text">Chez vous, partout et ailleurs</span>
            </Link>
        </div>
    )
}

export default HomeBanner