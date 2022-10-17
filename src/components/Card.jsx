import React from "react";
import s from '../styles/Card.module.css'
import { Link } from "react-router-dom";

export default function Card({ name, min, max, img, id, onClose }) {
  return (
    <div className={s.containerCard}>
      
      <button className={s.boton} onClick={onClose}>X</button>
      <Link style={{ textDecoration: 'none' }} to={`/information/${id}`}>
        <h4 className={s.title}>{name}</h4>
      <article className={s.temperature}>
        <section className={s.min}>
          <p>Min</p>
          <p>{min}°</p>
        </section>
        <section className={s.max}>
          <p>Max</p>
          <p>{max}°</p>
        </section>
        <img className={s.imagenCard} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img" />
      </article>
      </Link>
    </div>
  );
}
