import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Video from '../Video/Video'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Video></Video>
        </div>
    );
};

export default Home;