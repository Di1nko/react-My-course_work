import React from 'react';
import {  Link } from "react-router-dom";
import "./index.css";
const Navbar= () =>{
  return (
  <div>
    <ul>
    <li>
      <Link to="/">Главная</Link>
    </li>
    <li>
      <Link to="/info">Информация</Link>
    </li>
    <li>
      <Link to="/about">О нас</Link>
    </li>
    <li>
      <Link to="/contact">Контакты</Link>
    </li>
    <li>
      <Link to="/chart">Выборы пользователей</Link>
    </li>
    <li>
      <Link to="/player">Видео</Link>
    </li>
    </ul>
  </div>
  );
}
export default Navbar;
