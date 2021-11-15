import React, { useState } from "react";
import limfa from "../../assets/limfa.JPG";
import { Heading } from "../../components/heading/Heading";
import { Modal } from "../../components/modal/Modal";
import "./Promo.scss";

export const PromoThree = () => {
  const [isActive, onClose] = useState(false);
  return (
    <div className="grey-background">
      <div className="container promo" id="limfa">
        <Heading
          text="Марафон «Избавится от отеков лица за 7 дней»
"
        />

        <div className="panel-container">
          <div className="left-panel">
            <img src={limfa} alt="face"></img>
          </div>
          <div className="right-panel">
            <ul>
              <li>
                Марафон будет проводится в закрытом инстаграм аккаунте. Вы
                получаете постоянный доступ к материалам,прямым эфирам и всем
                обучающим видео.
              </li>
              <li>Напротяжении 7ми дней вы научитесь:</li>
              <li>
                Делать противоотечную утреннюю зарядку,которая займёт всего 7
                минут.
              </li>
              <li>Делать лимфодренажный самомассаж.</li>
              <li>
                Наносить аппликации кинезиотейпами для коррекции отеков всего
                лица,шеи и зоны декольте + топ аппликация для коррекции
                дряблости шеи.
              </li>
              <li>
                Узнаете,какие есть «подводные камни» в питании и физических
                нагрузках,которые будут приводить к отекам лица.
              </li>
              <li>
                На 2х прямых эфирах мы разберем все ваши вопросы и каждый
                получит индивидуальные рекомендации по устранению отеков лица.
              </li>

              <li>Длительность 7 дней.</li>
              <li>Стоимость 400 грн.</li>
            </ul>
            <button onClick={() => onClose(true)}>
              {/* <a
                href="https://next.privat24.ua/"
                target="_blank"
                rel="noreferrer"
              > */}
              Купить марафон
              {/* </a> */}
            </button>
          </div>
        </div>
      </div>
      <Modal isActive={isActive} onClose={onClose} />
    </div>
  );
};
