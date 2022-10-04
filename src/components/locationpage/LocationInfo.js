
import '../../styles/locationpage/LocationInfo.css'
import star from '../../assets/star.svg'

function LocationInfo() {
    return (
        <div className="info-bigwrapper">
            <div className="location-info">
                <h1 className="location-title">Cozy loft on the canal Saint-Martin</h1>
                <span className="location-subtitle">Paris, Île-de-France</span>
            </div>
            <div className="owner-info">
                <span className="owner-name">Alexandre Dumas</span>
                <div className="grey-circle"></div>
                <div className="five-stars">
                    <img src={star} alt="étoile" className="star"></img>
                    <img src={star} alt="étoile" className="star"></img>
                    <img src={star} alt="étoile" className="star"></img>
                    <img src={star} alt="étoile" className="star"></img>
                    <img src={star} alt="étoile" className="star"></img>
                </div>
            </div>
            <div className="tags-section">
                <div className="tag-cozy"><span>Cozy</span></div>
                <div className="tag-canal"><span>Canal</span></div>
                <div className="tag-paris"><span>Paris 10</span></div>
            </div>
        </div>
    )
}

export default LocationInfo