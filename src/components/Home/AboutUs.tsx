import React from 'react';
import Cats from '../../assets/IMG_4242.webp';

const AboutUs = () => {
    return (
        <div className="container container__about fade-in" id="about">
            <img
                className="about__photo"
                src={Cats}
                alt="Photo of Gary and Larry"
                width="600"
            />
            <div className="about__box">
                <h2>About</h2>
                <h3>Gary & Larry is a Cat Sitting service in Dubai</h3>
                <p>Our main service area is Downtown and Business Bay</p>
                <h3>How did it start?</h3>
                <p>
                    I became a cat mom in July 2022 when we adopted Gary and
                    Larry.
                    <br /> Since then, making their lives happy has been one of
                    my top priorities.
                    <br /> That&apos;s why I named the company Gary & Larry—{' '}
                    <br />
                    because I want to make other cats just as happy as they are.
                </p>
                <h3>What is the mission of Gary & Larry?</h3>
                <p>
                    Our mission is to provide care for your cats while you are
                    on vacation.
                    <br /> Your cat stays in the comfort of your home, <br />
                    the place where they feel safest and happiest, <br />
                    and I visit once or twice a day to feed them, <br />
                    clean the litter box, play with them, and make sure
                    everything is okay.
                    <br /> We take care of your cat, so you don&apos;t have to
                    worry
                    <br /> and can fully enjoy your travels.
                </p>
            </div>
        </div>
    );
};
export default AboutUs;
