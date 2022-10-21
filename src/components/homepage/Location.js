import '../../styles/homepage/Location.css'
import { Link } from 'react-router-dom'

function Location(props) {

    const data = props.data
    const title = props.title

    console.log(data)
    console.log(title)

    return (
        <div className="location">
            <Link to="/location/:id" className="location-link">
                <div className="location-layer">
                    <span className="location-minititle">{title}</span>
                    {/* <span className="location-minititle">Titre de la Location</span> */}
                </div>
            </Link>
        </div>
    )
}

export default Location