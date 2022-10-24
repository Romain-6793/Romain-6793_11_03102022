import {React} from 'react';
import Footer from '../components/Footer'
import LocationBanner from '../components/locationpage/LocationBanner';
import LocationDropdowns from '../components/locationpage/LocationDropdowns';
import LocationInfo from '../components/locationpage/LocationInfo';
import {useParams} from 'react-router-dom'

function LocationPage(props) {


    const {title} = useParams()
    const data = props.data
    console.log({title})

    

    return (
        <div>
            {data.filter(card => card.title === title).map((card, index) => (
                <div key={index}>
                <LocationBanner 
                data={data} 
                cover={card.cover} 
                />
                <LocationInfo 
                data={data} 
                title={card.title}
                ownerName={card.host.name}
                ownerPicture={card.host.picture}
                rating={card.rating}
                tags={card.tags}
                />
                <LocationDropdowns 
                data={data} 
                description={card.description} 
                equipments={card.equipments}
                />
                </div> 
            ))}
            <Footer/>
        </div>
    );
}

export default LocationPage;