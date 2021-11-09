import React, { useState } from "react";
import "./Header.scss";
import { CloseIcon } from "../../assets/CloseIcon";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import logo from "../../assets/logo2.png";

function Header() {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <div>
        <nav className="header">
          <div className="logo">
            <img src={logo} alt="logo" width="130px"></img>
          </div>
          <ul className="navigation">
            <li>
              <a href="#teip">Тейпирование лица</a>
            </li>
            <li>
              <a href="#consultation">Онлайн консультация</a>
            </li>
            <li>
              <a href="#review">Отзывы</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
          <div className="burger" onClick={() => setVisible(true)}>
            <BurgerMenu />
          </div>
        </nav>
      </div>
      {isVisible && (
        <div className="burger-menu">
          <div className="close-icon" onClick={() => setVisible(false)}>
            <CloseIcon />
          </div>
          <ul className="burger-navigation">
            <li onClick={() => setVisible(false)}>
              <a href="#teip">Тейпирование лица</a>
            </li>
            <li onClick={() => setVisible(false)}>
              <a href="#consultation">Онлайн консультация</a>
            </li>
            <li onClick={() => setVisible(false)}>
              <a href="#review">Отзывы</a>
            </li>
            <li onClick={() => setVisible(false)}>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
