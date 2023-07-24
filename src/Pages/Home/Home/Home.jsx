import React from 'react';
import Banner from '../Banner/Banner';
import Company from '../Company-section/Company';
import About from '../About/About';
import PopularCourses from '../PopularCourses/PopularCourses';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Company></Company>
            <About></About>
            <PopularCourses></PopularCourses>
            <Footer></Footer>
        </div>
    );
};

export default Home;