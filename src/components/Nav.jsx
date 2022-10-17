import React from "react";
import SearchBar from './SearchBar.jsx'
import s from '../styles/Nav.module.css'
import { Link } from "react-router-dom";
import logo from "../videos/giftLogo.gif"

export default function Nav({onSearch}) {
  return (
    <header className={s.container}>
      {/* <Link to={'/aboutMe'} className={s.aboutMe}>About Me</Link> */}
      <section className={s.title}>
        <img src={logo} alt="imagen" />
        <h2>Weather App with React</h2>
      </section>
      <SearchBar onSearch={onSearch}/>
    </header>
  );
}
