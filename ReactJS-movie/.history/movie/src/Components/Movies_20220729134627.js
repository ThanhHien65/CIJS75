import React, { useEffect, useState, useRefresh } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/fontawesome-free-solid";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "648e247ec9d10de146e6dca3652a6715";
const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
const Movies = () => {
  const [data, setData] = useState([]);
  const [infodirector, SetInfodirector] = useState("");
  const [infocast, setInfocas] = useState([]);
  const [trailer, setTrailer] = useState([""]);
  const [isOpen, setOpen] = useState(false);
  const [isShow, setShow] = useState(false);
  const [generes, setGeneres] = useState([]);
  const [valuegene, SetValueGene] = useState([]);
  const [genre, setGenre] = useState([]);
  const api = axios.create({ baseURL: BASE_URL });
  const getupcoming = api.get("/movie/upcoming", {
    params: { api_key },
  });
  const getdirector = (movie_id) =>
    api.get(`/movie/${movie_id}/credits`, {
      params: { api_key },
    });
  const gettrailer = (movie_id) =>
    api.get(`/movie/${movie_id}/videos`, {
      params: { api_key },
    });
  const getgenre = api.get("genre/movie/list", {
    params: { api_key },
  });
  useEffect(() => {
    getupcoming.then((response) => {
      var random = Math.floor(Math.random() * response.data.results.length);
      setData([...data, response.data.results[random]]);
      SetValueGene([...valuegene, response.data.results[random].genre_ids]);
      getdirector(response.data.results[random].id).then((response) => {
        const createdirector = response.data.crew;
        const searchdirector = createdirector.find(
          (item) => item.job === "Director"
        );
        const createcast = response.data.cast;
        const searchcast = createcast.map((item) => item.name);
        setInfocas(searchcast);
        SetInfodirector(searchdirector.name);
      });
      gettrailer(response.data.results[random].id).then((response) => {
        setTrailer(response.data.results[response.data.results.length - 1].key);
      });
      getgenre.then((response) => {
        const dataGene = response.data.genres;
        setGeneres([...generes, dataGene]);
      });
    });
  }, []);
  const test = () => {
    console.log(generes);
  };
  const showgenre = () => {
    setShow(!isShow);
    const arr = [];
    valuegene[0].forEach((itemm, index) => {
      const result = generes[0].find((item) => item.id === itemm);
      arr.push(result);
    });
  };
  return (
    <div>
      {data.map((movie, index) => {
        return (
          <div className="content" key={index}>
            <div className="conent_poster">
              <img src={getImage(movie.poster_path)} alt="" onClick={test} />
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
                  {infocast.map((cast) => `${cast}, `)}
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
              <div className="movie_genre">
                <div className="movie_trailer show_genre" onClick={showgenre}>
                  <h1>
                    Show Genre
                    <FontAwesomeIcon
                      className="fa-icon"
                      icon={isShow ? faCircleMinus : faCirclePlus}
                      style={{
                        color: "white",
                        fontSize: "2rem",
                        paddingLeft: "1.5rem",
                      }}
                    />
                  </h1>
                </div>
                <div
                  className="detail_genre"
                  style={
                    isShow
                      ? {
                          transform: "translateX(0)",
                          opacity: "1",
                          transition: "transform 0.5s ease-out",
                        }
                      : {
                          opacity: "0",
                          transform: "translateX(-10%)",
                        }
                  }
                >
                  <ul>
                    <li>11111</li>
                    <li>2222</li>
                    <li>3333</li>
                  </ul>
                </div>
              </div>
              <div className="movie_trailer" onClick={() => setOpen(true)}>
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
      <div>
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={trailer}
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
    </div>
  );
};
export default Movies;