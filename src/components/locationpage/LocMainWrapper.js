import { React, useState } from 'react';
import LocationBanner from './LocationBanner';
import LocationDropdowns from './LocationDropdowns';
import LocationInfo from './LocationInfo';
import { useParams } from 'react-router-dom';
import SmallLocationDD from './SmallLocationDD';


function LocMainWrapper(props) {

    const [isSmall, setIsSmall] = useState({ matches: window.matchMedia("(max-width: 1023px)").matches });

    function screenListener() {
        const handler = e => setIsSmall({ matches: e.matches });
        window.matchMedia("(max-width: 1023px)").addEventListener('change', handler);
    }

    screenListener()

    const { title } = useParams()
    const data = props.data

    return isSmall.matches ? (
        <div className="main-wrapper">
            {data.filter(card => card.title === title).map((card, index) => (
                <div key={index}>
                    <LocationBanner
                        data={data}
                        cover={card.cover}
                        pictures={card.pictures}
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
                    <SmallLocationDD
                        data={data}
                        description={card.description}
                        equipments={card.equipments}
                    />
                </div>
            ))}
        </div>
    ) : (
        <div className="main-wrapper">
            {data.filter(card => card.title === title).map((card, index) => (
                <div key={index}>
                    <LocationBanner
                        data={data}
                        cover={card.cover}
                        pictures={card.pictures}
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