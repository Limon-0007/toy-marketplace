import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from './Hero/Slider';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
        </div>
    );
};

export default HomeLayout;