
import Footer from '../components/Footer'
import LocMainWrapper from '../components/locationpage/LocMainWrapper';

function LocationPage(props) {

    const data = props.data

    return (
        <div>
        <LocMainWrapper data={data} /><Footer />
        </div>
    );
}

export default LocationPage;