import React from 'react';
import Slider from './Hero/Slider';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import UserReview from './UserReview/UserReview';
import AboutKiditos from './AboutKiditos/AboutKiditos';
import UseTitle from '../../../Hooks/UseTitle';

const Home = () => {
    UseTitle("Home")
    return (
        <>
        <Slider></Slider>
        <PhotoGallery></PhotoGallery>
        <ShopByCategory></ShopByCategory>
        <UserReview></UserReview>
        <AboutKiditos></AboutKiditos>
        </>
    );
};

export default Home;