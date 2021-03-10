import React from 'react';
import { Link } from 'react-router-dom';


const Footer = ({history}) => (
    <footer className="navbar fixed-bottom" id="FooterMenu">
        <div className="container">
            <div className="d-flex justify-content-between w-100">
                <span>Built with love by Louie Williford, &copy; 2021</span>
                <Link className="d-none d-md-block" to="/sudoku">Like Sudoku?</Link>
            </div>
        </div>
    </footer>
);

export default Footer;