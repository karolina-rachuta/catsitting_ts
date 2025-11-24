import React from 'react';
import Logo from '../../assets/2.png';
const Hero = () => {
    return (
        <div className="container container__hero" id="hero">
            <div>
                <img
                    src={Logo}
                    className="hero__logo"
                    alt="Logo of Gary and Larry Company"
                />
                <h1>Catsitting Service in Dubai</h1>
                <p>Downtown & Business Bay</p>
            </div>
        </div>
    );
};
export default Hero;
