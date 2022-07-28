import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/fontawesome-free-solid";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "648e247ec9d10de146e6dca3652a6715";
const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
const Movies = () => {
  const [data, setData] = useState([]);
  const [infodirector, SetInfodirector] = useState("");
  const [infocast, setInfocas] = useState("");
  const api = axios.create({ baseURL: BASE_URL });
  const getupcoming = api.get("/movie/upcoming", {
    params: { api_key },
  });
  const getdirector = (movie_id) =>
    api.get(`/movie/${movie_id}/credits`, {
      params: { api_key },
    });
  useEffect(() => {
    getupcoming.then((response) => {
      setData([...data, response.data.results[0]]);
      getdirector(response.data.results[0].id).then((response) => {
        const createdirector = response.data.crew;
        console.log(createdirector);
        const searchdirector = createdirector.find(
          (item) => item.job === "Director"
        );
        SetInfodirector(searchdirector.name);
        const createcast = response.data.cast;
        const searchcast = createcast.map((item, index) => item.name);
        setInfocas(searchcast);
        console.log(searchcast);
      });
    });
  }, []);
  return (
    <div>
      {data.map((movie, index) => {
        return (
          <div className="content" key={index}>
            <div className="conent_poster">
              <img
                src={getImage(movie.poster_path)}
                alt=""
                onClick={() => console.log(infocast)}
              />
            </div>
            <div className="content_introduction">
              <div className="content_moviename">
                <div>
                  <h1>{movie.title}</h1>
                </div>
              </div>
              <div className="content_director">
                <p>director: {infodirector}</p>
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
                  {infocast.map((cast)=>`${cast},`)}
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
