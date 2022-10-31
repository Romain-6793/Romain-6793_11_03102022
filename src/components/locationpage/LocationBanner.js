

import '../../styles/locationpage/LocationBanner.css'
import ImageSlider from './ImageSlider'

function LocationBanner(props) {

    const pictures = props.pictures
    const slides = [pictures]
    const finalSlides = slides.flat()

    console.log(slides)

    return (
        <div className="location-banner">
            <ImageSlider slides={finalSlides} />
            {/* <img src={locationBanner} alt=" vue de l'appartement à louer" className="location-banner"></img> */}
        </div>
    )
}

export default LocationBanner