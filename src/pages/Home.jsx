import React from 'react';
import Footer from '../components/Footer';
import HomeMainWrapper from '../components/homepage/HomeMainWrapper';

function Home(props) {

    const data = props.data

    return (
        <div>
            <HomeMainWrapper data={data} /><Footer />
        </div>
    );
}

export default Home;