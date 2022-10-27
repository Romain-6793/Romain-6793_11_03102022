import { React } from 'react';
import LocationBanner from './LocationBanner';
import LocationDropdowns from './LocationDropdowns';
import LocationInfo from './LocationInfo';
import { useParams } from 'react-router-dom';

function LocMainWrapper(props) {

    const { title } = useParams()
    const data = props.data

    return (
        <div className="main-wrapper">
            {data.filter(card => card.title === title).map((card, index) => (
                <div key={index}>
                    <LocationBanner
                        data={data}
                        cover={card.cover}
                    />
                    <LocationInfo
                        data={data}
                        title={card.title}
                        subtitle={card.location}
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
        </div>
    )

}

export default LocMainWrapper