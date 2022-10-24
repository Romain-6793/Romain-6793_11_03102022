
import '../../styles/locationpage/LocationDropdowns.css'
import DescDropdown from './DescDropdown'
import EqDropdown from './EqDropdown'


function LocationDropdowns(props) {

    const data = props.data
    const description = props.description
    const equipments = props.equipments

    return (
        <div className="dropdowns-wrapper">
            <DescDropdown data={data} description={description} />
            <EqDropdown data={data} equipments={equipments} />
        </div>
    )
}

export default LocationDropdowns