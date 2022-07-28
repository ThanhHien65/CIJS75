import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes,faPlay } from "@fortawesome/fontawesome-free-solid";
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
            <div>
              <h1>Outlander</h1>
            </div>
            <div className="movie_trailer">
            <FontAwesomeIcon
            className="fa-icon"
            icon={item ? faTimes : faBars}
            style={{ color: "626262", fontSize: "5rem" }}
          />
        </div>
            </div>
          </div>
          <div className="content_director">
            <p>director: steave jones</p>
          </div>
          <div className="content_story">
            <p>
              <b>Story: </b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam, vero, obcaecati molestias quisquam quia, ab doloremque
              totam eos itaque quam dolorum excepturi sed accusamus sint
              reiciendis dignissimos suscipit illum? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Molestiae aut, magnam quasi rerum
              veritatis laborum rem aliquid, minima deleniti culpa consequatur
              corporis explicabo maiores minus adipisci. Quisquam earum tempore
              est.
            </p>
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
