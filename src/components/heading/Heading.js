import headerImage from "../../assets/underH.png";
import ScrollAnimation from "react-animate-on-scroll";
import "./Heading.scss";

export const Heading = ({ text }) => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <div className="heading-container">
        <h2>{text}</h2>
        <img src={headerImage} alt="header icon" />
      </div>
    </ScrollAnimation>
  );
};
