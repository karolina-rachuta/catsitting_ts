import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Paw from '../../../assets/paw.svg';

type NavigationProps = {
    menuOpen: boolean;
};

const Navigation = ({ menuOpen }: NavigationProps) => {
    return (
        <ul className={menuOpen ? 'open' : ''}>
            <li>
                <ScrollLink to="about" className="menu__link">
                    <img src={Paw} width="25" alt="" /> About{' '}
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="order" className="menu__link">
                    <img src={Paw} width="25" alt="" /> Our services{' '}
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="footer" className="menu__link">
                    <img src={Paw} width="25" alt="" /> Contact{' '}
                </ScrollLink>
            </li>
        </ul>
    );
};

export default Navigation;
