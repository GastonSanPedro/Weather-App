import React from "react";
import Card from "./Card.jsx";
import s from '../styles/Cards.module.css'

export default function Cards({cities, onClose }) {
  if(cities && cities.length) {
    return (
      <div className={s.containerCards}>
        {cities.map((c) => 
          <Card
            name={c.name}
            min={c.min}
            max={c.max}
            img={c.img}
            id={c.id}
            key={c.id}
            onClose={() => onClose(c.id)}
          />
        )}
      </div>
    );
  }else{
      return(
          <div className={s.cargando}>
            Sin ciudades por el momento...
            <p className={s.spiner}></p>
          </div>
      )
  }
}
