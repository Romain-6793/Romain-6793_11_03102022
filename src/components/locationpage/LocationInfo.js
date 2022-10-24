
import '../../styles/locationpage/LocationInfo.css'
import star from '../../assets/star.svg'

function LocationInfo(props) {

    const title = props.title
    const subtitle = props.subtitle
    const ownerName = props.ownerName
    const ownerPicture = props.ownerPicture
    // const rating = props.rating
    const tags = props.tags

    return (
        <div className="info-bigwrapper">
            <div className="location-info">
                <h1 className="location-title">{title}</h1>
                <span className="location-subtitle">{subtitle}</span>
            </div>
            <div className="owner-info">
                <span className="owner-name">{ownerName}</span>
                <img src={ownerPicture} className="owner-picture" alt="propriétaire de l'appartement"></img>
                <div className="five-stars">
                    <img src={star} alt="étoile" className="star"></img>
                    <img src={star} alt="étoile" className="star"></img>
                    <img src={star} alt="étoile" className="star"></img>
                    <img src={star} alt="étoile" className="star"></img>
                    <img src={star} alt="étoile" className="star"></img>
                </div>
            </div>
            <div className="tags-section">
                {tags.map((tag, index) => (
                    <div className="tag" key={index}>{tag}</div>
                ))}
            </div>
        </div>
    )
}

export default LocationInfo