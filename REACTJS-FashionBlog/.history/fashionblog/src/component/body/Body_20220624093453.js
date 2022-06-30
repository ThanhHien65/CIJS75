import React from "react";

const Body = () => {
  return (
    <div className="bodyContent">
      <div className="Contentleft">
      <div className="Contntsearch">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div className="ContentRight"></div>
    </div>
  );
};

export default Body;
