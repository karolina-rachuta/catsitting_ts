import React from 'react';
import MenuList from './MenuList';
import clsx from 'clsx';

type NavigationProps = {
    menuOpen: boolean;
};

const Navigation = ({ menuOpen }: NavigationProps) => {
    return (
        <ul className={clsx({ open: menuOpen })}>
            <MenuList />
        </ul>
    );
};

export default Navigation;
