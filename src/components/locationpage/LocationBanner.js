

import '../../styles/locationpage/LocationBanner.css'
import ImageSlider from './ImageSlider'

function LocationBanner(props) {

    const pictures = props.pictures

    return (
        <div className="location-banner">
            <ImageSlider slides={pictures} />
        </div>
    )
}

export default LocationBanner