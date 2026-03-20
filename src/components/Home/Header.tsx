import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Header/Navigation';
import Logo from '../../assets/logo_orange.webp';
import Close from '../../assets/paw.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <nav className='container'>
                <div className="nav__firstRow">
                    <Link to="/" className="logo">
                        <img
                            className="logo__img"
                            src={Logo}
                            alt="Logo with the name Gary and Larry"
                        />
                    </Link>

                        {menuOpen ? (
                            <img
                                className="close__img"
                                src={Close}
                                onClick={handleMenu}
                                alt="Close menu"
                            />
                        ) : (
                            <div className="menu" onClick={handleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                </div>
                <div className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}>
                    <Navigation menuOpen={menuOpen} onItemClick={closeMenu} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
