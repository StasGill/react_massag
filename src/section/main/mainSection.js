import mainImage from "../../assets/main10-min.png";
import Header from "../../components/header/Header";
import { Heading } from "../../components/heading/Heading";
import "./mainSection.scss";

export function MainSection() {
  return (
    <div className="gradient">
      <div className="main-container">
        <Header />

        <div className="mainPanel">
          <div className="leftPanel">
            <Heading text="София Дорошенко" />
            {/* <h1>София Дорошенко</h1> */}

            <ul>
              <li>Эксперт по эстетике лица и тела</li>
              <li>Массажист-эстетист</li>
              <li>Кинезиотерапевт</li>
              <li>
                Научу вас как сохранить молодость и красоту вашего личика при
                помощи простых комплексов упражнений и кинезиотейпирования
              </li>
              <li>
                Мое кредо: « Эстетика тела и лица не может существовать без
                внутреннего баланса в организме»
              </li>
            </ul>
            <button>
              <a href="#course">Купить курс</a>
            </button>
          </div>
          <div className="rigthPanel">
            <img src={mainImage} alt="main foto" />
          </div>
        </div>
      </div>
    </div>
  );
}
