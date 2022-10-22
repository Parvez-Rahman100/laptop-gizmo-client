import React from 'react';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';




const Home = () => {

    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Parts></Parts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;