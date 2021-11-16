import React, { useState } from "react";
import headerImage from "../../assets/underH.png";
import { CloseIcon } from "../../assets/CloseIcon";
import "./Modal.scss";
import axios from "axios";

const formMock = {
  firstName: "",
  lastName: "",
  phone: null,
  instagram: "",
};

const botString =
  "https://api.telegram.org/bot2122968394:AAHelbnAiWlrq38ZeL76X3EyDBa2YYYf2Ck/sendMessage?chat_id=-658538158&text=";

export const Modal = ({ isActive, onClose }) => {
  const [state, setState] = useState(formMock);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = JSON.stringify(state);
    axios
      .post(botString + formData)
      .then(function (response) {
        onClose(false);
      })
      .catch(function (error) {
        onClose(false);
      });
  };
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
            <form onSubmit={onSubmit}>
              <p>Имя</p>
              <input
                type="text"
                name="firstName"
                required
                maxLength="30"
                value={state.firstName}
                onChange={handleChange}
              ></input>
              <p>Фамилия</p>
              <input
                name="lastName"
                required
                maxLength="30"
                onChange={handleChange}
                value={state.lastName}
              ></input>
              <p>Номер телефона</p>
              <input
                name="phone"
                type="number"
                required
                maxLength="30"
                onChange={handleChange}
                value={state.phone}
              ></input>
              <p>Инстаграмм</p>
              <input
                name="instagram"
                maxLength="30"
                onChange={handleChange}
                value={state.instagram}
              ></input>
              <button type="submit">
                {/* <a
                  href="https://next.privat24.ua/"
                  target="_blank"
                  rel="noreferrer"
                > */}
                Оплатить
                {/* </a> */}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
