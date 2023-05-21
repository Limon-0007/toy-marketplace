import React from 'react';
import Slider from './Hero/Slider';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        <PhotoGallery></PhotoGallery>
        <ShopByCategory></ShopByCategory>
        </>
    );
};

export default Home;