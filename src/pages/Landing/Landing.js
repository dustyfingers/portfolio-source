import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import './Landing.scss';
import particlesConfig from '../../data/particlesConfig';

import landingData from '../../data/data';

const { landingHeadline1, landingHeadline2, landingParagraph } = landingData;

const CtaLink = ({ title, link }) => {
    return (
        <Link to={link}>
            <button className="btn btn-lg cta-btn my-2 mx-3">{title}</button>
        </Link>
    );
};

const Landing = () => {
    const initParticles = useCallback(async engine => await loadFull(engine), []);
    const particlesLoaded = useCallback(container => container, []);
    return (
        <div className="container landing-container d-flex flex-column align-items-center justify-content-center">
            <section
                id="LandingSection"
                className="d-flex align-items-center text-center"
            >
                <div className="landing-cta-section mx-auto">
                    <div className="landing-content">
                        <h1 className="display-1 hi-tagline">{landingHeadline1}</h1>
                        <h1 className="display-1 name-tagline">{landingHeadline2}</h1>
                        <p className="personal-summary">{landingParagraph}</p>
                    </div>
                    <div>
                        <CtaLink title="My Resume" link="/resume" />
                        <CtaLink title="My Portfolio" link="/portfolio" />
                        {/* <CtaLink title="Let's Work Together" link="/work-together" /> */}
                    </div>
                </div>
            </section>
            <Particles
                id="particle-canvas"
                init={initParticles}
                loaded={particlesLoaded}
                options={particlesConfig}
            />
        </div>
    );
};

export default Landing;
