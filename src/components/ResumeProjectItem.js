import React from "react";


const ResumeProjectItem = ({ title, desc, siteLink }) => {
  return (
    <a href={siteLink}>
      <p className="fs-4">{title}</p>
      <p className="px-2">{desc}</p>
    </a>
  );
};

export default ResumeProjectItem;
