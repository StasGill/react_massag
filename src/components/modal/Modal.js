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

export const Modal = ({ isActive, onClose, type }) => {
  const [state, setState] = useState(formMock);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const four =
    "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI0MDAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JzRltC5INGC0L7QstCw0YAiLCJwdWJsaWNfa2V5Ijoic2FuZGJveF9pOTQ5OTk0OTQzNTciLCJsYW5ndWFnZSI6InJ1In0=&signature=iT879ZVNDJAraqzydnAfgjTZ6EE=";
  const eigth =
    "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI4MDAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JzRltC5INGC0L7QstCw0YAiLCJwdWJsaWNfa2V5Ijoic2FuZGJveF9pOTQ5OTk0OTQzNTciLCJsYW5ndWFnZSI6InJ1In0=&signature=iEuMhyU5VPkkVFKZblRPZ/BjkEk=";
  const six =
    "https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiI2MDAiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JzRltC5INGC0L7QstCw0YAiLCJwdWJsaWNfa2V5Ijoic2FuZGJveF9pOTQ5OTk0OTQzNTciLCJsYW5ndWFnZSI6InJ1In0=&signature=yna//8AXSkdKVU0HSH8tOb8yNCU=";

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = JSON.stringify(state);

    let url = [botString + formData];
    axios({
      method: "post",
      url: url + "?nocache=" + new Date().getTime(), // Safari fix
      withCredentials: true,
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
              <button type="submit">Оплатить</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
