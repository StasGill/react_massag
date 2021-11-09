import "./Main.scss";
import { MainSection } from "../section/main/mainSection";
import { Contacts } from "../section/contacts/Contacts";
import { Promo } from "../section/promo/Promo";
import { Reviews } from "../section/reviews/Reviews";
import { Footer } from "../section/footer/Footer";
import { PromoTwo } from "../section/promoTwo/Promo";

function Main() {
  return (
    <div className="main">
      <MainSection />
      <Promo />
      <PromoTwo />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
