import React from 'react';
import Header from './Home/Header';
import Hero from './Home/Hero';
import AboutUs from './Home/AboutUs';
import Service from './Home/Service';
import Footer from './Home/Footer';
import FadeIn from './FadeIn';
import Contact from './Home/Contact';
import { FormContextProvider } from '../context/QueryContext';

const Home = () => {
    return (
        <FadeIn>
            <Header />
            <Hero />
            <AboutUs />
            <FormContextProvider>
                <Service />
            </FormContextProvider>
            <Contact />
            <Footer />
        </FadeIn>
    );
};

export default Home;
