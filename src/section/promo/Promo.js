import React, { useState } from "react";

import taip from "../../assets/taip.jpeg";
import { Heading } from "../../components/heading/Heading";
import { Modal } from "../../components/modal/Modal";
import "./Promo.scss";

export const Promo = () => {
  const [isActive, onClose] = useState(false);
  return (
    <div className="grey-background">
      <div className="container promo" id="teip">
        <Heading text="Курс «Тейпирование лица не выходя из дома»" />

        <div className="panel-container">
          <div className="left-panel">
            <img src={taip} alt="face"></img>
          </div>
          <div className="right-panel">
            <ul>
              <li>
                Консультация (очно либо онлайн), где мы подробно разбираем ваш
                запрос, я провожу детальный анализ осанки и постурологического
                баланса, собираю информацию про ежедневный
                уход,питание,дыхание,наличие или отсутствие инъекций и т.д И на
                основе этих данных подбираю для вас оптимальный комплекс
                аппликаций.
              </li>
              <li>
                Набор готовых аппликаций для тех зон,которые корректируем.
              </li>
              <li>Видео инструкции по нанесению.</li>
              <li>Поддержка в телеграмм канале по всем вопросам.</li>
              <li>
                Комплекс аппликаций позволяет расслабить или усилить тонус
                мышц,убрать отёчность и птоз и самое главное - мы формируем
                стойкий результат,переобучая мышцы.
              </li>
              <li>Длительность 20 дней.</li>
              <li>Стоимость 800 грн.</li>
            </ul>
            <button onClick={() => onClose(true)}>Купить курс</button>
          </div>
        </div>
      </div>
      <Modal isActive={isActive} onClose={onClose} type={8} />
    </div>
  );
};
