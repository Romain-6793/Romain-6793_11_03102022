import React from 'react';
import Footer from '../components/Footer'
import LocationBanner from '../components/locationpage/LocationBanner';
import LocationDropdowns from '../components/locationpage/LocationDropdowns';
import LocationInfo from '../components/locationpage/LocationInfo';


function LocationPage() {
    return (
        <div>
            <LocationBanner /><LocationDropdowns /><LocationInfo /><Footer/>
        </div>
    );
}

export default LocationPage;