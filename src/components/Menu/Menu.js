import React from 'react';
import { Link } from 'react-router-dom';

import HamburgerMenuIcon from '../svg/HamburgerMenuIcon';

import './Menu.scss';
import Logo from '../svg/Logo';

const NavItem = ({ title, link }) => {
    return (
        <li className="nav-item d-flex flex-row-reverse">
            <Link to={link} className="nav-link">
                // {title}
            </Link>
        </li>
    );
};

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="Menu">
            <div className="container-fluid">
                <Link to="/" id="logo">
                    <Logo height={40} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarDropdown"
                    aria-controls="navbarDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <HamburgerMenuIcon height={18} width={18} color={'#020e17'} />
                </button>

                <div
                    className="collapse navbar-collapse navbar-dropdown"
                    id="navbarDropdown"
                >
                    <ul className="navbar-nav ms-auto">
                        <NavItem title="Home" link="/" />
                        <NavItem title="Portfolio" link="/portfolio" />
                        <NavItem title="Resume" link="/resume" />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
