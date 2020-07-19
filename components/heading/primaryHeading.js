import React from "react";

const PrimaryHeading = ({ text, classList }) => {
  return (
    <h2 className={`primary-heading mb-0 ${classList ? classList : ""}`}>
      {text}
    </h2>
  );
};

export default PrimaryHeading;
