import '../../styles/MainWrapper.css'

import LocationBanner from './LocationBanner'
import LocationDropdowns from './LocationDropdowns'
import LocationInfo from './LocationInfo'

function LocMainWrapper() {
    return (
        <div className="main-wrapper">
            <LocationBanner /><LocationInfo /><LocationDropdowns />
        </div>
    )
}

export default LocMainWrapper