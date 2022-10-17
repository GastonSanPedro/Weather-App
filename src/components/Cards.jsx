import React from "react";
import Card from "./Card.jsx";
import s from '../styles/Cards.module.css'

export default function Cards({cities, onClose, currentPage,  setCurrentPage}) {
  const filteredCities = ()=>{
    return cities.slice(currentPage, currentPage+2)
  }


  const handleBack = ()=>{
    if(currentPage > 0) setCurrentPage(currentPage - 2)
  }

  const handleNext= ()=>{
    if(cities.length > currentPage+2 ) setCurrentPage(currentPage + 2)
  }
   
  if(cities && cities.length) {
    return (
      <div className={s.containerCards}>
      {cities.length >2 && currentPage > 0 && <button onClick={handleBack} className={s.buttonPagination}>⇦</button>}
        {filteredCities().map((c) => 
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
        {cities.length >2 && cities.length > currentPage+2  && <button onClick={handleNext} className={s.buttonPagination}>⇨</button>}
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
