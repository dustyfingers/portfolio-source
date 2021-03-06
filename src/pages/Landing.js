import React from "react";
import Button from "@material-ui/core/Button";
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
        <Button variant="outlined" size="large">
          My Portfolio
        </Button>
      </Link>
      <Link to="/resume">
        <Button variant="outlined" size="large">
          My Resume
        </Button>
      </Link>
    </div>
  </section>
);

export default Landing;
