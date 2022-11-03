
import { Link } from 'react-router-dom'
import homeBackground from '../../assets/home-background.png'
import '../../styles/homepage/HomeBanner.css'


function HomeBanner() {
    return (
        <div className="homeBanner-bg">
            <Link to="*" className="home">
                <img src={homeBackground} alt="bord de mer exotique" className="homeBanner-image">
                </img>
                <div className="homeBanner-layer">
                    <span className="homeBanner-text">Chez vous, partout et ailleurs</span>
                    <span className="homeBanner-span1">Chez vous,</span>
                    <span className="homeBanner-span2">partout et ailleurs</span>
                </div>

            </Link>
        </div>
    )
}

export default HomeBanner