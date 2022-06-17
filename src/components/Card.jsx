import React from "react";
import s from '../styles/Card.module.css'

export default function Card({ name, min, max, img, id, onClose }) {
  return (
    <div className={s.containerCard}>
      <button className={s.boton} onClick={onClose}>X</button>
      <h4>{name}</h4>
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
    </div>
  );
}
