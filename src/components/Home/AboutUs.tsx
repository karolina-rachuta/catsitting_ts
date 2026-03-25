import React from 'react';

const AboutUs = () => {
    return (
        <div className="container section__container fade-in" id="about">
            <div className="about__box">
                <h2 className="sections__hdl">About us</h2>
                <div className="about__wrapper">
                    <div className="about__paragraph">
                        <h3 className="question">How did it all start?</h3>
                        <p className="answer">
                            I became a cat mom in July 2022 when we adopted Gary
                            and Larry. Since then, making their lives happy has
                            been one of my top priorities. That’s why I named
                            the company Gary & Larry — because I want to make
                            other cats just as happy as they are.
                        </p>
                    </div>
                    <div className="about__paragraph">
                        <h3 className="question">
                            What is the mission of Gary & Larry?
                        </h3>
                        <p className="answer">
                            Our mission is to provide loving and reliable care
                            for your cats while you are away. Your cat stays in
                            the comfort of their own home — the place where they
                            feel safest and happiest — and we make sure
                            everything is okay. You can relax and enjoy your
                            time away knowing your cat is in good hands.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutUs;
