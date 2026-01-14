import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Whatsapp from '../../assets/whatsapp.svg';
import MenuList from './Header/MenuList';

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
                </div>

                <div className="footer__socials">
                    Blackheath SE3<br />
                    London, UK
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
