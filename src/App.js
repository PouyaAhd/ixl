import "./index.css";
import { useState, useEffect } from "react";
import "./App.css";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import Xml from './components/xml/xml'

import PN from "persian-number";

// import { fetchWeather } from "./api/fetchWeather";

// import BarChart from "./components/BarChart";
// import { UserData } from "./Data";

// const options = {
//   cMapUrl: 'cmaps/',
//   cMapPacked: true,
//   standardFontDataUrl: 'standard_fonts/',
// };

function App() {
  console.log(PN.convert(123));
  const [input, setInput] = useState("");
  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //       borderRadius: 5,
  //     },
  //   ],
  // });
  // const [query, setQuery] = useState("");
  // const [weather, setWeather] = useState({});

  // const search = async (e) => {
  //   if (e.key === "Enter") {
  //     const data = await fetchWeather(query);
  //     setWeather(data);
  //     setQuery("");
  //   }
  // };
  return (
    // <div className="main-container">
    //   <input
    //     type="text"
    //     placeholder="search..."
    //     className="search"
    //     value={query}
    //     onChange={(e) => {
    //       setQuery(e.target.value);
    //     }}
    //     onKeyPress={search}
    //   />
    //   {weather.main && (
    //     <div className="city">
    //       <h2 className="city-name">
    //         <span>{weather.name}</span>
    //         <sup>{weather.sys.country}</sup>
    //       </h2>
    //       <div className="city-temp">
    //         {Math.round(weather.main.temp)}
    //         <sup>&deg;C</sup>
    //       </div>
    //       <div className="info">
    //         <img
    //           className="city-icon"
    //           src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    //           alt={weather.weather[0].description}
    //         />
    //         <p>{weather.weather[0].description}</p>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div>
      <Xml/>
    </div>
  );
}

export default App;
