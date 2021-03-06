import "./Reviews.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Heading } from "../../components/heading/Heading";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";

export const Reviews = () => {
  return (
    <div className="gradient">
      <div className="container promo" id="review">
        <Heading text="Отзывы моих клиентов" />
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showArrows
          swipeable={false}
        >
          <div className="promo-card">
            <div className="promo-card_left">
              <img src={client3} alt="woman" />
            </div>
            <div className="promo-card_right">
              <h3>Анастасия Г.</h3>
              <p>
                Из-за активной мимики начались заломы на лбу. Стал вопрос об
                инекциях либо альтернативном методе борьбы с заломами. Выбор пал
                на комплексное моделирования лица с помошью тейпов у Софии.
                Прошла курс, очень довольна результатом!
              </p>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-card_left">
              <img src={client1} alt="woman" />
            </div>
            <div className="promo-card_right">
              <h3>Галина Т.</h3>
              <p>
                Из-за неправильного дыхания, больших нагрузок, активной мимики и
                возрастных моментов начала замечать некоторые особенности,
                которые мне не нравятся и я отказываюсь у себя их принимать!
                Поэтому я пришла по рекомендации знакомой к Софии Дорошенко на
                курс массажа моделирования лица.
              </p>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-card_left">
              <img src={client2} alt="woman" />
            </div>
            <div className="promo-card_right">
              <h3>Алена Б.</h3>
              <p>
                Спасибо Софии за эти чудо тейпы! Моя межбровка тоже благодарит!
                Я ее заклеиваю когда работаю за копмпьютером. В первый же день
                сняла тейпы и лицо как будто отдохнувшее! Напряжение во лбу нет,
                ну не волшебсто ли? Что же будет когда пройду весь курс? Теперь
                хочу с осанкой поработать тейпами! Спасибо Софии большое что
                провела меня в мир расслабленного лба, я в восторге!
              </p>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-card_left">
              <img src={client4} alt="woman" />
            </div>
            <div className="promo-card_right">
              <h3>Алина Б.</h3>
              <p>
                Я зранку зняла тейпи і вже побачила результат. Як же вони круто
                працювали поки я спала!
              </p>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-card_left">
              <img src={client5} alt="woman" />
            </div>
            <div className="promo-card_right">
              <h3>Вероника П.</h3>
              <p>
                Эфект после тейпов понравился. Залом разгладился. Думаю что
                нужно будет пробовать и дальше клеить.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
