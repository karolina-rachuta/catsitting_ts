import React from 'react';
import Logo from '../../assets/2.png';
import image from '../../assets/IMG_1641.webp';
const Hero = () => {
    return (
        <div className="container section__container" id="hero">
            <div className="hdl__wrapper">
                <h1 className="hero__hdl">
                    Professional Cat Care{' '}
                    <span className="hero__hdl-orange"> While You're Away</span>
                </h1>
                <p className="hero__text">
                    Trusted, loving care for your feline friends. Daily visits,
                    playtime, feeding, and lots of cuddles in the comfort of
                    their own home.
                </p>
                <button className="btn">Book a Visit</button>
            </div>
            <img
                src={image}
                alt="Photo of Gary and Larry"
                className="hero__image"
            />
        </div>
    );
};
export default Hero;
