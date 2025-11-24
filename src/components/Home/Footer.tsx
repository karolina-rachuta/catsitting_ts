import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Whatsapp from '../../assets/whatsapp.svg';

function Footer() {
    return (
        <>
            <div className="container footer__container" id="footer">
                <div className="footer__box">
                    <Link to="/" className="logo">
                        <img
                            className="logo__img"
                            src={Logo}
                            alt="Logo with the company name Gary and Larry and cat paws"
                        />
                    </Link>
                    <div className="footer__details">
                        <p></p>
                        <p>
                            <a href=""></a>
                        </p>
                    </div>
                </div>

                <div className="footer__socials">
                    Downtown and Bussines Bay <br />
                    Dubai
                </div>
            </div>
            <div className="footer__copyrights">
                <p className="copyrights__text">
                    Copyright Cat Sitting Gary&Larry &copy; 2025
                </p>
            </div>
        </>
    );
}

export default Footer;
