import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPlay } from "@fortawesome/fontawesome-free-solid";
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
              <h1>
                <FontAwesomeIcon
                  className="fa-icon"
                  icon={faPlay}
                  style={{
                    color: "white",
                    fontSize: "2rem",
                    paddingRight: "0.8rem",
                  }}
                />
                play now
              </h1>
            </div>
          </div>
          <div className="content_director">
            <p>director: steave jones</p>
          </div>
          <div className="content_story">
            <p>
              <b>Story: </b>
              Framed in the 1940s for the double murder of his wife and her
              lover, upstanding banker Andy Dufresne begins a new life at the
              Shawshank prison, where he puts his accounting skills to work for
              an amoral warden. During his long stretch in prison, Dufresne
              comes to be admired by the other inmates -- including an older
              prisoner named Red -- for his integrity and unquenchable sense of
              hope.
            </p>
          </div>
          <div className="content_cats">
            <p>
              <b>Cast: </b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sed, incidunt totam quam eos ducimus cum. Quae blanditiis
              consequuntur, laborum rerum amet, vel pariatur voluptatum saepe ea
              id voluptates eum.
            </p>
          </div>
          .content_po
        </div>
      </div>
    </div>
  );
};
export default Movies;
