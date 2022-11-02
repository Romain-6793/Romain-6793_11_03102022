import React from 'react';
import Footer from '../components/Footer';
import HomeMainWrapper from '../components/homepage/HomeMainWrapper';

function Home(props) {

    const data = props.data

    return (
        <>
            <HomeMainWrapper data={data} /><Footer />
        </>
    );
}

export default Home;