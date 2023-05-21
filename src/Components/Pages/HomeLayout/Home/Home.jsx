import React from 'react';
import Slider from './Hero/Slider';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import UserReview from './UserReview/UserReview';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        <PhotoGallery></PhotoGallery>
        <ShopByCategory></ShopByCategory>
        <UserReview></UserReview>
        </>
    );
};

export default Home;