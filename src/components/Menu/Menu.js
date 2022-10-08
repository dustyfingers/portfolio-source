import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="Menu">
            <div className="container-fluid">
                <Link to="/" id="logo">
                    <img height="40px" src="/images/logo.svg" alt="logo" />
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
                    <img
                        className="navbar-toggler-icon"
                        src="/images/list.svg"
                        alt="hamburger menu button"
                    />
                </button>

                <div className="collapse navbar-collapse" id="navbarDropdown">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex flex-row-reverse">
                            <Link to="/" className="nav-link">
                                // Home
                            </Link>
                        </li>
                        <li className="nav-item d-flex flex-row-reverse">
                            <Link to="/resume" className="nav-link">
                                // Resume
                            </Link>
                        </li>
                        <li className="nav-item d-flex flex-row-reverse">
                            <Link to="/portfolio" className="nav-link">
                                // Portfolio
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
