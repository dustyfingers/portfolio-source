import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Menu.scss';

const Menu = ({ history }) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="Menu">
            <div className="container-fluid">
                <Link to="/" id="logo"><img height="40px" src="/images/logo.svg"/></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <img className="navbar-toggler-icon" src="/images/list.svg"></img>
                </button>

                <div className="collapse navbar-collapse" id="navbarDropdown">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex flex-row-reverse">
                            <a className="nav-link" onClick={() => history.push("/")}>Home</a>
                        </li>
                        <li className="nav-item d-flex flex-row-reverse">
                            <a className="nav-link" onClick={() => history.push("/resume")}>Resume</a>
                        </li>
                        <li className="nav-item d-flex flex-row-reverse">
                            <a className="nav-link" onClick={() => history.push("/portfolio")}>Portfolio</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </>
);

export default withRouter(Menu);