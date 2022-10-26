import React from 'react';
import Footer from '../components/Footer';
import HomeBanner from '../components/homepage/HomeBanner';
import Gallery from '../components/homepage/Gallery';

function Home(props) {

    const data = props.data

    return (
        <div>
            <HomeBanner /><Gallery data={data} /><Footer />
        </div>
    );
}

export default Home;