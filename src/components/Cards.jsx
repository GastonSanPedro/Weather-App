import React from "react";
import Card from "./Card.jsx";
import s from '../styles/Cards.module.css'
import { useState } from "react";

export default function Cards({cities, onClose }) {
  // const [] = useState()
  
  // const handleBack = ()=>{

  // }

  // const handleNext= ()=>{

  // }
  
  if(cities && cities.length) {
    // if(cities.split())
    return (
      <div className={s.containerCards}>
      {/* <button onClick={handleBack}>previous</button> */}
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
        {/* <button onClick={handleNext}>next</button> */}
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
