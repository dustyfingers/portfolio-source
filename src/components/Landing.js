import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styles from "../styles/LandingStyles";
import Footer from "./Footer";

const Landing = ({ classes }) => (
  <section className={classes.landingSection}>
    <Typography className={classes.header}>Hi!</Typography>
    <Typography className={classes.header}>I'm Louie.</Typography>
    <Typography paragraph className={classes.paragraph}>
      I'm a full stack web developer with a passion for learning about cutting
      edge technology. In particular, I know and use frequently: JS/ES6+,
      Python, LESS/SASS, React, Redux, Node.js, Express, Django, MongoDB, SQL,
      Heroku and AWS Amplify/Route53. When I'm not at building the software
      solutions of the future you can find me at the park with my dogs, at the
      gym practicing jiu jitsu, or at home playing guitar!
    </Typography>
    <Typography
      paragraph
      className={`${classes.paragraph} ${classes.paragraph2}`}
    >
      I currently live and work in Colorado Springs, CO, but I am open to
      opportunities in any major city in the US.
    </Typography>
    <div className={classes.buttons}>
      <Link to="/portfolio" className={classes.buttonLink}>
        <Button variant="outlined" size="large" className={classes.button}>
          My Portfolio
        </Button>
      </Link>
      <Link to="/resume" className={classes.buttonLink}>
        <Button variant="outlined" size="large" className={classes.button}>
          My Resume
        </Button>
      </Link>
    </div>
    <Footer />
  </section>
);

export default withStyles(styles)(Landing);
