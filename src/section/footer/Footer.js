import "./Footer.scss";
import visa from "../../assets/visa.png";
import dogovor from "../../assets/dogovor.pdf";

export const Footer = () => {
  return (
    <div className="footer-container gradient">
      <a href={dogovor} target="blank">
        Пользовательское соглашение
      </a>
      <img src={visa} alt="visa" width="150px" />
      <p>2021</p>
    </div>
  );
};
