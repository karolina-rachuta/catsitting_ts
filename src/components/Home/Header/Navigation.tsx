import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import clsx from 'clsx';

type NavigationProps = {
    menuOpen: boolean;
    onItemClick: () => void;
};

type MenuItem = {
    label: string;
    href: string;
};

const menuList: MenuItem[] = [
    {
        label: 'About me',
        href: 'about',
    },
    {
        label: 'Services',
        href: 'order',
    },
    {
        label: 'FAQ',
        href: 'faq',
    },
    {
        label: 'Contact',
        href: 'contact',
    },
];

const Navigation = ({ menuOpen, onItemClick }: NavigationProps) => {
    return (
        <>
            {menuList.map((item, index) => (
                    <ScrollLink
                    className="menu__link"
                        to={item.href}
                        key={index}
                        smooth={true}
                        duration={500}
                        onClick={onItemClick}
                    >
                        {item.label}
                    </ScrollLink>
            ))}
        </>
    );
};

export default Navigation;
