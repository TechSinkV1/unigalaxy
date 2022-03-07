import React from 'react';
import './Home.css'
import TopBanner from '../TopBanner/TopBanner';
import Courses from '../Courses/Courses';
import Introduction from '../Introduction/Introduction';
const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Introduction></Introduction>
            <Courses></Courses>
        </div>
    );
};

export default Home;