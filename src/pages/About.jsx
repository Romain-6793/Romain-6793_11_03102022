import React from 'react';
import AboutBanner from '../components/aboutpage/AboutBanner'
import AboutDropdowns from '../components/aboutpage/AboutDropdowns'
import Footer from '../components/Footer';

function About() {
    return ( 
        <div>
            <AboutBanner /><AboutDropdowns /><Footer />
        </div>
    );
}

export default About;