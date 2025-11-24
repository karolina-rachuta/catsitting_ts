import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './Header/Navigation';
import Logo from '../../assets/logo.png';
import LogoCat from '../../assets/logoCat.webp';
import Close from '../../assets/paw.svg';
import Modal from './Modal';
import { FormContextProvider } from '../../context/QueryContext';
import Query from './Query';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [queryIsOpen, setQueryIsOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <header>
            <nav>
                <div className="nav__firstRow">
                    <Link to="/" className="logo">
                        <img
                            className="logo__img"
                            src={LogoCat}
                            alt="Logo with the company name Gary and Larry and cat paws"
                        />
                    </Link>
                    <div className="menu__box">
                        <ScrollLink to="order" className="nav__order">
                            BOOK NOW
                        </ScrollLink>
                        <Modal>
                            <FormContextProvider>
                                <Query
                                    setIsOpen={setQueryIsOpen}
                                    open={queryIsOpen}
                                    onClose={() => setQueryIsOpen(false)}
                                />
                            </FormContextProvider>
                        </Modal>
                        {menuOpen ? (
                            <img
                                className="close__img"
                                src={Close}
                                onClick={handleMenu}
                                alt="Close menu"
                            ></img>
                        ) : (
                            <div className="menu" onClick={handleMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="nav__hamburder">
                    <Navigation menuOpen={menuOpen} />
                </div>
            </nav>
        </header>
    );
};
export default Header;
