import "./Contacts.scss";
import { Phone } from "../../assets/Phone";
import { Instagram } from "../../assets/Instagram";
import { Telegram } from "../../assets/Telegram";
import { Heading } from "../../components/heading/Heading";

export function Contacts() {
  return (
    <div className="contacts-container grey-background">
      <div className="contacts-panel" id="contacts">
        <Heading text="Контакты" />
        <div className="contacts-card_container">
          <div className="contacts-card">
            <Phone />
            +38063-416-105-7
            <button>
              <a href="tel:+380634161057">Позвонить</a>
            </button>
          </div>
          <div className="contacts-card">
            <Instagram />
            @sone4kadoroshenko_kh
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
