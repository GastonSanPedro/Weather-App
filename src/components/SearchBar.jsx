import React, { useState } from "react";
import s from '../styles/SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity]=useState("")
  return (
    <form className={s.search} onSubmit={(e) => {e.preventDefault() 
    onSearch(city)
    setCity("")
    }} >
      <input className={s.inputCity} 
      type="text" 
      placeholder="Ingrese una ciudad..." 
      value={city} 
      onChange={e=> setCity(e.target.value)}/>
      <input className={s.button} type="submit" value="Agregar" />
    </form>
  );
}
