

import '../../styles/locationpage/LocationBanner.css'

function LocationBanner(props) {

    const locationBanner = props.cover

    return (
        <div>
            <img src={locationBanner} alt=" vue de l'appartement à louer" className="location-banner"></img>
        </div>
    )
}

export default LocationBanner