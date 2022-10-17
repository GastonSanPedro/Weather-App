import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import s from "../styles/information.module.css";
import { Link } from "react-router-dom";
import mapboxgl, {Marker, Popup} from 'mapbox-gl';
import { useLayoutEffect } from "react";
import CardInfo from "./CardInfo";
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line

const {REACT_APP_apiKeyMap} = process.env
mapboxgl.accessToken = REACT_APP_apiKeyMap

export default function Information({ cities }) {
  let { ciudadId } = useParams();
  const cityInformation = cities.find((city) => city.id === Number(ciudadId));
const mapDiv = useRef(null);

useLayoutEffect(()=>{
    if(cityInformation){
    const map = new mapboxgl.Map({
        container: mapDiv.current, 
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [cityInformation.longitude, cityInformation.latitude], // starting position [lng, lat]
        zoom: 14, // starting zoom
        })

    const popUp = new Popup({color:"black",})
    .setHTML(`<h5>You are here!</h5>`)

    new Marker({color: "red"})
    .setPopup(popUp)
    .setLngLat([cityInformation.longitude, cityInformation.latitude])
    .addTo(map)
    }
},[cityInformation])


  return (
    <div>
      <article className={s.container}>
        <h2 className={s.title}>Informacion acerca de la ciudad: </h2>
        {cityInformation ? 
        <div className={s.containerMapandCard}>
            <div ref={mapDiv} className={s.map}></div>
        <CardInfo 
        min={cityInformation.min}
        max={cityInformation.max}
        humidity={cityInformation.humidity}
        feels_like={cityInformation.feels_like}
        country={cityInformation.country}
        img={cityInformation.img}
        wind={cityInformation.wind}
        name={cityInformation.name}
        weather={cityInformation.weather}
        weatherDescription={cityInformation.weatherDescription}
        key={cityInformation.id}
        clouds={cityInformation.clouds}
        latitude= {cityInformation.latitude}
        longitude= {cityInformation.longitude}
        />
        </div>
        : (<h2 className= {s.cityNotFound}>No hay ciudades por el momento</h2>)
        }
        <Link to="/"><button className={s.buttonBack}>Go back</button></Link>
      </article>
    </div>
  );
}