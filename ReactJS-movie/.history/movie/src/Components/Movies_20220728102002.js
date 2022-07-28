import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faPlay } from "@fortawesome/fontawesome-free-solid";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "648e247ec9d10de146e6dca3652a6715";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
const Movies = () => {
  const [data, setData] = useState([{}]);
  const api = axios.create({ baseURL: BASE_URL });
  const getToprated = api.get("movie/top_rated", {
    params: { api_key },
  });
  useEffect(() => {
    getToprated.then((response) => {
      setData(response.data.results[0]);
      console.log(response.data.results[0]);
    });
  }, []);
  const test = () => {
    console.log(data);
  };
  return (
    <div>
      <h1 onClick={test}>aaa</h1>
    </div>
  );
};
export default Movies;
