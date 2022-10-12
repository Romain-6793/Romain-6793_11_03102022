import React from 'react';
import Footer from '../components/Footer';
import HomeBanner from '../components/homepage/HomeBanner';
import Gallery from '../components/homepage/Gallery';

function Home() {
    return (
        <div>
            <HomeBanner /><Gallery /><Footer />
        </div>
    );
}

export default Home;