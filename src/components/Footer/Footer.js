import React from 'react';

import './Footer.scss';

const Footer = () => (
    <footer className="navbar fixed-bottom" id="Footer">
        <div className="container">
            <div className="d-flex justify-content-between w-100">
                <span className="footer-text">Built with love by <a className="linkedin-link" href="https://www.linkedin.com/in/louie-williford/">Louie Williford</a> &copy; 2021</span>
            </div>
        </div>
    </footer>
);

export default Footer;