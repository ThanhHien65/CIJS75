import React from "react";

const Body = () => {
  return (
    <div className="bodyContent">
      <div className="Contentleft">
         <p>

    Music search: <input type="search" name="musicsearch" placeholder="Song, author, album...">

    <input type="submit" value="Search">

  </p>
      </div>
      <div className="ContentRight"></div>
    </div>
  );
};

export default Body;
