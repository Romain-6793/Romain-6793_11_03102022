import '../../styles/MainWrapper.css'

import Header from "../Header"
import LocationBanner from './LocationBanner'
import LocationInfo from './LocationInfo'

function LocMainWrapper() {
    return (
        <div className="main-wrapper">
            <Header /><LocationBanner /><LocationInfo />
        </div>
    )
}

export default LocMainWrapper