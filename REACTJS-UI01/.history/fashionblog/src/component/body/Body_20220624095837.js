import React from "react";
import TextField from "@material-ui/core/TextField";
const Body = () => {
  return (
    <div className="bodyContent">
      <div className="Contentleft">
        <div className="Contentsearch">
          <TextField
            // id="outlined-basic"
            // variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <h1>test</h1>
      </div>
      <div className="ContentRight"></div>
    </div>
  );
};

export default Body;
