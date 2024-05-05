import React from 'react';
import dayjs from 'dayjs';

import './Footer.scss';

const Footer = () => (
    <footer className="navbar fixed-bottom" id="Footer">
        <div className="container-fluid">
            <div className="footer-text">
                <span>Built with love by </span>
                <a
                    className="linkedin-link"
                    href="https://www.linkedin.com/in/louie-williford/"
                >
                    Louie Williford
                </a>
                <span> &copy; {dayjs().year()}</span>
            </div>
        </div>
    </footer>
);

export default Footer;
