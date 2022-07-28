import React from "react";

const Movies = () => {
  return (
    <div>
      <div className="content">
        <div className="conent_poster">
          <img
            src="https://images.unsplash.com/photo-1658887239588-7051b6ce2308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt=""
          />
        </div>
        <div className="content_introduction">
          <div className="content_moviename">
            <h1>Outlander</h1>
          </div>
          <div className="content_director">
            <p>director: steave jones</p>
          </div>
          <div className="content_story">
           <p></p>
          </div>
          <div className="content_cats">
            <p>
              <b>cast: </b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sed, incidunt totam quam eos ducimus cum. Quae blanditiis
              consequuntur, laborum rerum amet, vel pariatur voluptatum saepe ea
              id voluptates eum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
