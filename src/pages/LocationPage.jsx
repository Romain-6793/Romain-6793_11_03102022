import {React} from 'react';
import Footer from '../components/Footer'
import LocationBanner from '../components/locationpage/LocationBanner';
import LocationDropdowns from '../components/locationpage/LocationDropdowns';
import LocationInfo from '../components/locationpage/LocationInfo';
import {useParams} from 'react-router-dom'

function LocationPage(props) {


    const params = useParams()
    console.log(params)
    const data = props.data
    console.log(data)

    return (
        <div>
            <LocationBanner /><LocationDropdowns data={data} /><LocationInfo data={data} /><Footer/>
        </div>
    );
}

export default LocationPage;