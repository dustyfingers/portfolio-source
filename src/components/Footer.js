import React from 'react';
import { Link } from 'react-router-dom';


const Footer = ({history}) => (
    <footer className="navbar fixed-bottom" id="FooterMenu">
        <div className="container">
            <div className="d-flex justify-content-between w-100">
                <span>Built with love by Louie Williford, &copy; 2021</span>
            </div>
        </div>
    </footer>
);

export default Footer;