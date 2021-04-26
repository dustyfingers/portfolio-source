import React from "react";
import { Link } from "react-router-dom";

import "./Landing.scss";

const Landing = () => (
<section id="LandingSection" className="d-flex align-items-center text-center">
    <div className="landing-cta-section mx-auto">
        <h1 className="display-1 hi-tagline">Hi!</h1>
        <h4 className="display-1 name-tagline">I'm Louie.</h4>
        <p className="personal-summary">
            I'm a full stack software developer with a passion for learning about cutting
            edge technology. When I'm not building user-oriented software solutions, you can find me at the
            park with my beautiful family, in my home studio producing instrumentals, or at the gym practicing jiu jitsu!
        </p>
        <p className="work-line">I am currently looking for work in or around Denver, CO.</p>

        {/* call to action links */}
        <div>
            <Link to="/portfolio">
                <button className="btn btn-lg cta-btn my-2 mx-3">
                    My Portfolio
                </button>
            </Link>
            <Link to="/resume">
                <button className="btn btn-lg cta-btn my-2 mx-3">
                    My Resume
                </button>
            </Link>
        </div>
    </div>
</section>
);

export default Landing;
