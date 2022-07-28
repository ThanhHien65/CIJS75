import React from "react";

const Movies = () => {
  return (
    <div>
      <div className="content">
        <div className="conent_poster">
          <img
            src="https://images.unsplash.com/photo-1581008685504-7a71a2857ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
        </div>
        <div className="content_introduction">
          <div className="content_moviename">
            <h1>Outlander</h1>
          </div>
          <div className="content_director">
            <h2>director: steave jones</h2>
          </div>
          <div className="content_story">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vitae neque ullam eius. Tempora suscipit delectus, quia rem harum
            assumenda impedit. At neque veniam ipsam tempore voluptatum
            accusamus modi voluptatibus.
          </div>
          <div className="content_cats">
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
