
import locationBanner from '../../assets/location-banner.png'
import '../../styles/locationpage/LocationBanner.css'

function LocationBanner() {
    return (
        <div>
            <img src={locationBanner} alt=" vue de l'appartement à louer" className="location-banner"></img>
        </div>
    )
}

export default LocationBanner