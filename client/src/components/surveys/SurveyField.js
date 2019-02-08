import React from "react";

export default ({ input, label }) => {
  return (
    <>
      <label>{ label }</label>
      <input {...input} />
    </>
  );
};
