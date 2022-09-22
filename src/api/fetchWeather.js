import React from "react";
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "7a2df6f30dc62fd7e4f746494b6c41de";

export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data
};
