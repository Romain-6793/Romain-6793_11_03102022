
import '../styles/MainWrapper.css'

import Header from "./Header"
import HomeBanner from "./HomeBanner"
import Gallery from "./Gallery"

function MainWrapper() {
    return (
        <div className="main-wrapper">
            <Header /><HomeBanner /><Gallery />
        </div>
    )
}

export default MainWrapper