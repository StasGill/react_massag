import "./Reviews.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Heading } from "../../components/heading/Heading";

export const Reviews = () => {
  return (
    <div className="grey-background">
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
              <img
                src="https://thumbs.dreamstime.com/b/beautiful-woman-brunette-healthy-beauty-skin-smile-spa-beautifu-beautiful-woman-brunette-healthy-beauty-skin-smile-spa-beautiful-115934162.jpg"
                alt="woman"
              />
            </div>
            <div className="promo-card_right">
              <h3>Aria S.</h3>
              <p>
                Отличный курс. Доступный и содержательный. Дает четкое понимание
                основ теории торговли опционами. Рассматриваются конкретные
                примеры на российском рынке опционов. Выделяются основные
                моменты, важные для практической работы. Обучение проходит в
                дружественной обстановке, в условиях комфортного обсуждения и
                обмена информацией. Крайне полезны примеры конкретных стратегий
                в различных рыночных ситуациях.
              </p>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-card_left">
              <img
                src="https://i0.wp.com/www.saudi24news.com/sa/wp-content/uploads/2021/09/4428666_1632116416.jpg?fit=728%2C400&ssl=1"
                alt="woman"
              />
            </div>
            <div className="promo-card_right">
              <h3>Marie K.</h3>
              <p>
                Отличный курс. Доступный и содержательный. Дает четкое понимание
                основ теории торговли опционами. Рассматриваются конкретные
                примеры на российском рынке опционов. Выделяются основные
                моменты, важные для практической работы. Обучение проходит в
                дружественной обстановке, в условиях комфортного обсуждения и
                обмена информацией. Крайне полезны примеры конкретных стратегий
                в различных рыночных ситуациях.
              </p>
            </div>
          </div>
          <div className="promo-card">
            <div className="promo-card_left">
              <img
                src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="woman"
              />
            </div>
            <div className="promo-card_right">
              <h3>Anie M.</h3>
              <p>
                Отличный курс. Доступный и содержательный. Дает четкое понимание
                основ теории торговли опционами. Рассматриваются конкретные
                примеры на российском рынке опционов. Выделяются основные
                моменты, важные для практической работы. Обучение проходит в
                дружественной обстановке, в условиях комфортного обсуждения и
                обмена информацией. Крайне полезны примеры конкретных стратегий
                в различных рыночных ситуациях.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
