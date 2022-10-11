import "../../styles/MainWrapper.css"
import AboutBanner from './AboutBanner'
import AboutDropdowns from './AboutDropdowns'




function AboutMainWrapper() {
    return (
        <div className="main-wrapper">
            <AboutBanner /><AboutDropdowns />
        </div>
    )
}

export default AboutMainWrapper