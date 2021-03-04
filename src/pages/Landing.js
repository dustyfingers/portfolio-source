import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Landing = () => (
  <section>
    <Typography>Hi!</Typography>
    <Typography>I'm Louie.</Typography>
    <Typography paragraph>
      I'm a full stack web developer with a passion for learning about cutting
      edge technology. When I'm not building software, you can find me at the
      park with my dogs or at the gym practicing jiu jitsu!
    </Typography>
    <Typography
      paragraph
    >
      I currently work in Denver, CO.
    </Typography>
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
    <Footer />
  </section>
);

export default Landing;
