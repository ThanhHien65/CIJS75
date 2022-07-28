import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay } from "@fortawesome/fontawesome-free-solid";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "648e247ec9d10de146e6dca3652a6715";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
const Movies = () => {
  const [data, setData] = useState([]);
  const api = axios.create({ baseURL: BASE_URL });
  const getupcoming = api.get("/movie/upcoming", {
    params: { api_key },
  });
  useEffect(() => {
    getupcoming.then((response) => {
      setData(push(response.data.results[0]));
      console.log(response.data.results);
    });
  }, []);
  return (
    <div>
      {data.map((movie) => {
        return (
          <div className="content">
            <div className="conent_poster">
              <img src={getImage(movie.poster_path)} alt="" />
            </div>
            <div className="content_introduction">
              <div className="content_moviename">
                <div>
                  <h1>{movie.title}</h1>
                </div>
              </div>
              <div className="content_director">
                <p>director: {movie.title}</p>
              </div>
              <div className="content_story">
                <p>
                  <b>Story: </b>
                  {movie.overview}
                </p>
              </div>
              <div className="content_cats">
                <p>
                  <b>Cast: </b>
                  {movie.overview}
                </p>
              </div>
              <div className="content_rating">
                <div className="content_popularity">
                  <p>
                    <b>Popularity: </b>
                    {movie.popularity}
                  </p>
                </div>
                <div className="content_release">
                  <p>
                    <b>Release Date: </b>
                    {movie.release_date}
                  </p>
                </div>
              </div>
              <div className="movie_trailer">
                <h1>
                  <FontAwesomeIcon
                    className="fa-icon"
                    icon={faPlay}
                    style={{
                      color: "white",
                      fontSize: "2rem",
                      paddingRight: "1.5rem",
                    }}
                  />
                  Trailer
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Movies;
