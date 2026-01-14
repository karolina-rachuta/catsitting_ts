import React, { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import Paw from '../../../assets/paw.svg';

const MenuList: FC = () => {
    return (
        <>
            <li>
                <ScrollLink to="about" className="menu__link">
                    <img src={Paw} width="25" alt="Paw" /> About
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="order" className="menu__link">
                    <img src={Paw} width="25" alt="Paw" /> Our services
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="contact" className="menu__link">
                    <img src={Paw} width="25" alt="Paw" /> Contact
                </ScrollLink>
            </li>

        </>
    )
}

export default MenuList
