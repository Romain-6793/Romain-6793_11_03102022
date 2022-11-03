import '../../styles/homepage/Location.css'
import { Link } from 'react-router-dom'

function Location(props) {

    const title = props.title
    const cover = props.cover

    return (
        <div className="location">
            <Link to={`/location/${title}`} className="location-link">
                <div className="cover-picture" style={{ backgroundImage: `url(${cover})` }}>
                    <div className="location-layer">
                        <span className="location-minititle">{title}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Location