import React from 'react';
import Logo from '../../assets/2.png';
import image from '../../assets/IMG_1641.webp';
const Hero = () => {
    return (
        <div className="container container__hero" id="hero">
            <div className="hdl-wrapper">
                <h1>
                    Professional Cat Care <span> While You're Away</span>
                </h1>
                <p>
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
