import React from "react";
import headerImage from "../../assets/underH.png";
import { CloseIcon } from "../../assets/CloseIcon";
import "./Modal.scss";

export const Modal = ({ isActive, onClose }) => {
  return (
    <>
      {isActive && (
        <div className="backdrop">
          <div className="modal">
            <div className="close-icon" onClick={() => onClose(false)}>
              <CloseIcon />
            </div>
            <div className="heading-container">
              <h2>Заполните форму обратной связи перед оплатой</h2>
              <img src={headerImage} alt="header icon" />
            </div>
            <form>
              <p>Имя</p>
              <input type="name"></input>
              <p>Фамилия</p>
              <input type="lastname"></input>
              <p>Номер телефона</p>
              <input></input>
              <p>Инстаграмм</p>
              <input></input>
              <button>
                <a
                  href="https://next.privat24.ua/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Оплатить
                </a>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
