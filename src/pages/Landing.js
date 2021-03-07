import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <section>
    <p>Hi!</p>
    <p>I'm Louie.</p>
    <p>
      I'm a full stack web developer with a passion for learning about cutting
      edge technology. When I'm not building software, you can find me at the
      park with my dogs or at the gym practicing jiu jitsu!
    </p>
    <p>
      I currently work in Denver, CO.
    </p>
    <div>
      <Link to="/portfolio">
        <button className="btn btn-large">
          My Portfolio
        </button>
      </Link>
      <Link to="/resume">
        <button className="btn btn-large">
          My Resume
        </button>
      </Link>
    </div>
  </section>
);

export default Landing;
