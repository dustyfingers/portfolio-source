import React from "react";


const ResumeProjectItem = ({ title, desc, siteLink }) => {
  return (
    <a href={siteLink}>
      <p className="fs-4">{title}</p>
      <p>{desc}</p>
    </a>
  );
};

export default ResumeProjectItem;
