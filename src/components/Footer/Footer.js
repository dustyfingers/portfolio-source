import React from 'react';
import dayjs from 'dayjs';

import './Footer.scss';

const Footer = () => (
    <footer className="navbar fixed-bottom" id="Footer">
        <div className="container">
            <div className="d-flex justify-content-between w-100">
                <span className="footer-text">Built with love by <a className="linkedin-link" href="https://www.linkedin.com/in/louie-williford/">Louie Williford</a> &copy; {dayjs().year()}</span>
            </div>
        </div>
    </footer>
);

export default Footer;