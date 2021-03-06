import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Menu = ({ history }) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark" id="TopMenu">
            <div className="container-fluid">

                <Link to="/" id="logo"><h3>Louie Williford</h3></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown" aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarDropdown">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" onClick={() => history.push("/")}>Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" onClick={() => history.push("/portfolio")}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" onClick={() => history.push("/resume")}>Resume</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </>
);

export default withRouter(Menu);