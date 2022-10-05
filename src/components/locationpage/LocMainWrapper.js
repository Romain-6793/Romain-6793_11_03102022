import '../../styles/MainWrapper.css'

import LocationBanner from './LocationBanner'
import LocationInfo from './LocationInfo'

function LocMainWrapper() {
    return (
        <div className="main-wrapper">
            <LocationBanner /><LocationInfo />
        </div>
    )
}

export default LocMainWrapper