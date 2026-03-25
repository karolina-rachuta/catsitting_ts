import React from 'react';
import Header from './Home/Header';
import Hero from './Home/Hero';
import AboutUs from './Home/AboutUs';
import Service from './Home/Service';
import FAQ from './Home/FAQ';
import Footer from './Home/Footer';
import FadeIn from './FadeIn';
import Contact from './Home/Contact';
import WhyChooseUs from './Home/WhyChooseUs';
import { FormContextProvider } from '../context/QueryContext';

const Home = () => {
    return (
        <FadeIn>
            <Header />
            <Hero />
            <WhyChooseUs />
            <AboutUs />
            <FormContextProvider>
                <Service />
            </FormContextProvider>
            <FAQ />
            <Contact />
            <Footer />
        </FadeIn>
    );
};

export default Home;
