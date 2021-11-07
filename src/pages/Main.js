import "./Main.scss";
import { MainSection } from "../section/main/mainSection";
import { Course } from "../section/course/Course";
import { Contacts } from "../section/contacts/Contacts";
import { Promo } from "../section/promo/Promo";
import { Reviews } from "../section/reviews/Reviews";
import { Footer } from "../section/footer/Footer";

function Main() {
  return (
    <div className="main">
      <MainSection />
      <Promo />
      <Course />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
