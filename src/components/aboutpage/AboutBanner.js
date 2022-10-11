
import aboutBanner from '../../assets/about-banner.png'
import '../../styles/aboutpage/AboutBanner.css'


function HomeBanner() {
    return (
        <div className="aboutBanner-bg">
            <img src={aboutBanner} alt="panorama montagneux" className="aboutBanner-image">
            </img>
            <div className="aboutBanner-layer"></div>
        </div>
    )
}

export default HomeBanner