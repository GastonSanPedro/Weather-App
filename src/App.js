import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import video from "./videos/rain1.mp4";

/*class App extends React.Component{
  constructor(){

  }

  render(){
    return
  }
}*/
function App() {
  const [cities, setCities] = useState([]);
  let apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  function onSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        console.log(responseJson.main);
        if (responseJson.main !== undefined) {
          const city = {
            min: Math.round(responseJson.main.temp_min),
            max: Math.round(responseJson.main.temp_max),
            img: responseJson.weather[0].icon,
            id: responseJson.id,
            wind: responseJson.wind.speed,
            temp: responseJson.main.temp,
            name: responseJson.name,
            weather: responseJson.weather[0].main,
            clouds: responseJson.clouds.all,
            latitude: responseJson.coord.lat,
            longitude: responseJson.coord.lon,
          };

          let repetido = false;
          cities.forEach((c) => {
            c.id === city.id ? (repetido = true) : (repetido = false);
          });
          if (!repetido) setCities((oldCities) => [...oldCities, city]);
        } else {
          alert("City is not found");
        }
      })
      .catch((e) => console.log(e));
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  return (
    <div className="App">
      <video src={video} autoPlay loop muted></video>
      <div className="content">
        <Nav onSearch={onSearch} />
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
