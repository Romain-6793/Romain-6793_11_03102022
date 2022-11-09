import '../../styles/homepage/Location.css'
import { Link } from 'react-router-dom'

function Location(props) {

    const title = props.title
    const cover = props.cover
    const id = props.id

    return (
        <div className="location">
            <Link to={`/location/${id}`} className="location-link">
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