import React from "react";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemLink(props) {
  return (
    <ListItem button component="a" {...props}>
      {props.children}
    </ListItem>
  );
}

const ProjectItem = ({ title, desc, siteLink }) => {
  return (
    <ListItemLink href={siteLink}>
      <ListItemText
        primary={title}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
            >
              {desc}
            </Typography>
          </>
        }
      ></ListItemText>
    </ListItemLink>
  );
};

export default ProjectItem;
