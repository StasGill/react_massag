import "./Contacts.scss";
import { Phone } from "../../assets/Phone";
import { Instagram } from "../../assets/Instagram";
import { Telegram } from "../../assets/Telegram";
import { Heading } from "../../components/heading/Heading";

export function Contacts() {
  return (
    <div className="contacts-container gradient">
      <div className="contacts-panel" id="contacts">
        <Heading text="Контакты" />
        <div className="contacts-card_container">
          <div className="contacts-card">
            <Phone />
            +38067777-777-7
            <button>
              <a href="tel:+380677777777">Позвонить</a>
            </button>
          </div>
          <div className="contacts-card">
            <Instagram />
            @sony4kadorochenko
            <button>
              <a
                href="https://www.instagram.com/sone4kadoroshenko_kh/"
                target="_blank"
                rel="noreferrer"
              >
                Написать
              </a>
            </button>
          </div>
          <div className="contacts-card">
            <Telegram />
            @sone4kadoroshenko_kh
            <button>
              <a
                href="https://t.me/sone4kadoroshenko_kh"
                target="_blank"
                rel="noreferrer"
              >
                Написать
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
