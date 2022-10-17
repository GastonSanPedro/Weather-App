import React from "react";
import s from '../styles/CardInfo.module.css'
import { Link } from "react-router-dom";

export default function CardInfo({ name, min, max, img, humidity,feels_like,
  country,
  wind,
  weather,
  weatherDescription,
  clouds,
  latitude,
  longitude}) {
  console.log(name, min, max, img, humidity,feels_like,country,wind,weather,weatherDescription,
    clouds,
    latitude,
    longitude)
  return (
    <div className={s.containerCard}>
        <h5 className={s.titleInfo}>{name}</h5>
      <article className={s.temperature}>
        <h3>Temperature:</h3>
        <div className={s.containerTopics}>
        <section className={s.min}>
          <p>Min</p>
          <p>{min}°</p>
        </section>
        <section className={s.max}>
          <p>Max</p>
          <p>{max}°</p>
        </section>
        <section className={s.max}>
          <p>Sensation</p>
          <p>{feels_like}°</p>
        </section>
        </div>
      </article>

      <article className={s.country}>
        <h3>Ubication:</h3>
        <div className={s.containerTopics}>
          <section >
            <p>Country</p>
            <p>{country}</p>
          </section>
          <section>
            <p>Latitude</p> 
            <p>{latitude}</p>
          </section> 
          <section>
            <p>Longitude</p>
            <p>{longitude}</p>
          </section> 
        </div>
      </article>

      <article className={s.weather}>
        <h3>Weather:</h3>
        <div className={s.containerTopics}>
        <section>
          <p>Weather</p>
          <p>{weatherDescription}</p>
        </section>
        <section>
          <p>Wind speed</p>
          <p>{wind}</p>
        </section>
        <img className={s.imagenCard} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
        </div>
      </article>
    </div>
  );
}