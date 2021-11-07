import headerImage from "../../assets/underH.png";
import "./Heading.scss";

export const Heading = ({ text }) => {
  return (
    <div className="heading-container">
      <h2>{text}</h2>
      <img src={headerImage} alt="header icon" />
    </div>
  );
};
