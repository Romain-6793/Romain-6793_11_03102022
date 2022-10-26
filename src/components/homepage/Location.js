import '../../styles/homepage/Location.css'
import { Link } from 'react-router-dom'

function Location(props) {

    const title = props.title

    return (
        <div className="location">
            <Link to={`/location/${title}`} className="location-link">
                <div className="location-layer">
                    <span className="location-minititle">{title}</span>
                </div>
            </Link>
        </div>
    )
}

export default Location