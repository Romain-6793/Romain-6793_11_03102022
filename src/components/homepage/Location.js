import '../../styles/homepage/Location.css'
import { Link } from 'react-router-dom'

function Location() {
    return (
        <div className="location">
            <Link to="/location" className="location-link">
                <div className="location-layer">
                    <span className="location-minititle">Titre de la location</span>
                </div>
            </Link>
        </div>
    )
}

export default Location