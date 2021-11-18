import React, { useState, useEffect } from "react";
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

export const Modal = ({ isActive, onClose, type }) => {
  const [state, setState] = useState(formMock);
  const [cost, setCost] = useState("400 грн.");

  useEffect(() => {
    if (type === 4) {
      setCost(" 400 грн.");
    }

    if (type === 8) {
      setCost(" 800 грн.");
    }

    if (type === 6) {
      setCost(" 600 грн.");
    }
  }, [type]);
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const four =
    "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI0MDAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JzRltC5INGC0L7QstCw0YAiLCJwdWJsaWNfa2V5IjoiaTg2MjMyNzYyNjAxIiwibGFuZ3VhZ2UiOiJydSJ9&signature=QdJouqESe9BOH0QwmRDXQ5cwXZc=";

  const eigth =
    "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI4MDAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JzRltC5INGC0L7QstCw0YAiLCJwdWJsaWNfa2V5IjoiaTg2MjMyNzYyNjAxIiwibGFuZ3VhZ2UiOiJydSJ9&signature=tGBUEh5Q7A7AomhWb4Q9VV6d874=";

  const six =
    "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI2MDAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JzRltC5INGC0L7QstCw0YAiLCJwdWJsaWNfa2V5IjoiaTg2MjMyNzYyNjAxIiwibGFuZ3VhZ2UiOiJydSJ9&signature=LiZkQUIRaIhKwzY3ZYKYnP961BA=";

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = JSON.stringify(state);

    let url = botString + formData + "/";
    await axios({
      method: "post",
      url: url, // Safari fix
      withCredentials: false,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    if (type === 4) {
      window.location.href = four;
    }

    if (type === 8) {
      window.location.href = eigth;
    }

    if (type === 6) {
      window.location.href = six;
    }
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
                type="tel"
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
              <button type="submit">Оплатить {cost}</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
