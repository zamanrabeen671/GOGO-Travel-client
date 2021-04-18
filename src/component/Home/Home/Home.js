import React from 'react';
import Blogs from '../Blogs/Blogs';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact'
import Footer from '../../Shared/Footer/Footer'
import TourImage from '../TourImage/TourImage';
const Home = () => {
    return (
        <div className="sections-div">
            <Header></Header>
            <Service></Service>
            <Featured></Featured>
            <TourImage></TourImage>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;