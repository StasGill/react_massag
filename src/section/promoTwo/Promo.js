import React, { useState } from "react";
import promo2 from "../../assets/promo2.jpg";
import { Heading } from "../../components/heading/Heading";
import { Modal } from "../../components/modal/Modal";
import "./Promo.scss";

export const PromoTwo = () => {
  const [isActive, onClose] = useState(false);
  return (
    <div className="gradient">
      <div className="container promoTwo" id="consultation">
        <Heading
          text="Онлайн консультация по эстетической коррекции лица
"
        />

        <div className="panel-container">
          <div className="right-panel">
            <ul>
              <li>
                Определяем цель коррекции (например, коррекция овала лица,убрать
                отёчность и т.д).
              </li>
              <li>
                Выявляем ряд причинных факторов,которые приводят к нежелательным
                эстетическим проявлениям.
              </li>
              <li>
                формирую индивидуально для вас комплекс упражнений для
                эстетической коррекции в домашних условиях.
              </li>
              <li>
                Даю рекомендации по дополнительным методам эстетической
                коррекции( тейпирование,салонные процедуры по уходу ).
              </li>
              <li>Поддержка в телеграмм канале по всем вопросам.</li>
              <li>Длительность консультации 80 минут.</li>
              <li>Стоимость 600 грн.</li>
            </ul>
            <button onClick={() => onClose(true)}>
              {/* <a
                href="https://next.privat24.ua/"
                target="_blank"
                rel="noreferrer"
              > */}
              Купить консультацию
              {/* </a> */}
            </button>
          </div>
          <div className="left-panel">
            <img src={promo2} alt="face"></img>
          </div>
        </div>
        <Modal isActive={isActive} onClose={onClose} />
      </div>
    </div>
  );
};
