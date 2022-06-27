import React from "react";

const Body = () => {
  return (
    <div className="bodyContent">
      <div className="Contentleft">
      <div className="search">
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
