
import '../../styles/MainWrapper.css'


import HomeBanner from "./HomeBanner"
import Gallery from "./Gallery"

function HomeMainWrapper() {
    return (
        <div className="main-wrapper">
            <HomeBanner /><Gallery />
        </div>
    )
}

export default HomeMainWrapper