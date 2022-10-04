
import '../../styles/MainWrapper.css'

import Header from "../Header"
import HomeBanner from "./HomeBanner"
import Gallery from "./Gallery"

function HomeMainWrapper() {
    return (
        <div className="main-wrapper">
            <Header /><HomeBanner /><Gallery />
        </div>
    )
}

export default HomeMainWrapper