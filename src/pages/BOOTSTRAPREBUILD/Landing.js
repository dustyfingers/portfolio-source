import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <section id="LandingSection" className="d-flex align-items-center text-center">
    <div>
      <p>Hi!</p>
      <p>I'm Louie.</p>
      <p>
        I'm a full stack software developer with a passion for learning about cutting
        edge technology. When I'm not building software, you can find me at the
        park with my beautiful family or at the gym practicing jiu jitsu!
      </p>
      <p>
        I am currently looking for work in or around Denver, CO.
      </p>
      <div>
        <Link to="/portfolio">
          <button className="btn btn-lg landing-ctas my-2 mx-3">
            My Portfolio
          </button>
        </Link>
        <Link to="/resume">
          <button className="btn btn-lg landing-ctas my-2 mx-3">
            My Resume
          </button>
        </Link>
      </div>  
    </div>
  </section>
);

export default Landing;
