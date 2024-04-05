import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import './Landing.scss';
import particlesConfig from '../../data/particlesConfig';

const CtaLink = ({ title, link }) => {
    return (
        <Link to={link}>
            <button className="btn btn-lg cta-btn my-2 mx-3">{title}</button>
        </Link>
    );
};

const Landing = () => {
    const initParticles = useCallback(async engine => await loadFull(engine), []);
    const particlesLoaded = useCallback(container => console.log(container), []);
    return (
        <main className="container" id="PageContainer">
            <section
                id="LandingSection"
                className="d-flex align-items-center text-center"
            >
                <div className="landing-cta-section mx-auto">
                    <div className="landing-content">
                        <h1 className="display-1 hi-tagline">Hi!</h1>
                        <h1 className="display-1 name-tagline">I'm Louie.</h1>
                        <p className="personal-summary">
                            I'm a full stack software engineer with a passion for learning
                            about cutting edge technology. When I'm not building
                            user-oriented software solutions you can find me at the park
                            with my beautiful family, in my home studio producing
                            instrumentals, or at the gym practicing jiu jitsu!
                        </p>
                    </div>
                    <div>
                        <CtaLink title="My Resume" link="/resume" />
                        <CtaLink title="My Portfolio" link="/portfolio" />
                        {/* <CtaLink title="Let's Work Together" link="/work-together" /> */}
                    </div>
                </div>

                <Particles
                    id="particle-canvas"
                    init={initParticles}
                    loaded={particlesLoaded}
                    options={particlesConfig}
                />
            </section>
        </main>
    );
};

export default Landing;
