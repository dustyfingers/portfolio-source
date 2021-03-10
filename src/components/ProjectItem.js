import React from "react";


const ProjectItem = ({ title, desc, siteLink }) => {
  return (
    <a href={siteLink}>
      <p>{title}</p>
      <p>{desc}</p>
    </a>
  );
};

export default ProjectItem;
