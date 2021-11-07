import React, { useState } from "react";
import "./Header.scss";
import { CloseIcon } from "../../assets/CloseIcon";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import { LotusIcon } from "../../assets/Lotus";

function Header() {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      <div className="container">
        <nav className="header">
          <div className="logo">
            <LotusIcon />
          </div>
          <ul className="navigation">
            <li>
              <a href="#teip">Тейпирование лица</a>
            </li>
            <li>
              <a href="#course">Все Курсы</a>
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
                <a href="#course">Все Курсы</a>
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
      </div>
    </>
  );
}

export default Header;
