import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import styles from "../styles/LandingStyles";
import Footer from "../components/Footer";

const Landing = ({ classes }) => (
  <section className={classes.landingSection}>
    <Typography className={classes.header}>Hi!</Typography>
    <Typography className={classes.header}>I'm Louie.</Typography>
    <Typography paragraph className={classes.paragraph}>
      I'm a full stack web developer with a passion for learning about cutting
      edge technology. When I'm not building software, you can find me at the
      park with my dogs or at the gym practicing jiu jitsu!
    </Typography>
    <Typography
      paragraph
      className={`${classes.paragraph} ${classes.paragraph2}`}
    >
      I currently work in Denver, CO.
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
