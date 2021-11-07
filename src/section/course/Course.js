import "./course.scss";
import { Heading } from "../../components/heading/Heading";

export function Course() {
  return (
    <div className="gradient">
      <div className="coursePanel" id="course">
        <Heading text="Курсы" />
        <div className="course-container">
          <div className="course-card">
            <img
              src="https://aquaspawellness.com/wp-content/uploads/2016/02/BACK-LOCAL-MASSAGE-1.jpg"
              alt="main foto"
            />
            <h3>Начальный</h3>
            <p>
              Lorem inpus names counr Lorem inpus names counr Lorem inpus names
              counr Lorem inpus names counr Lorem inpus names counr Lorem inpus
              names counr
            </p>
            <p>Цена: 500$</p>
            <button>
              <a
                href="https://next.privat24.ua/"
                target="_blank"
                rel="noreferrer"
              >
                Купить
              </a>
            </button>
          </div>
          <div className="course-card">
            <img
              src="https://www.msccollege.edu/wp-content/uploads/2020/12/what-is-aromatherapy-1024x680.jpg"
              alt="main foto"
            />
            <h3>Базовый</h3>
            <p>
              Lorem inpus names counr Lorem inpus names counr Lorem inpus names
              counr Lorem inpus names counr Lorem inpus names counr Lorem inpus
              names counr
            </p>
            <p>Цена: 600$</p>
            <button>
              {" "}
              <a
                href="https://next.privat24.ua/"
                target="_blank"
                rel="noreferrer"
              >
                Купить
              </a>
            </button>
          </div>
          <div className="course-card">
            <img
              src="https://images.ctfassets.net/yixw23k2v6vo/5dBlewMnnyoQcIGi4YI02M/8214c756448d47c3997dea1d6a82229d/iStock-856952836-1.jpg?w=864&h=576&fm=webp&fit=thumb&q=65"
              alt="main foto"
            />
            <h3>Про</h3>
            <p>
              Lorem inpus names counr Lorem inpus names counr Lorem inpus names
              counr Lorem inpus names counr Lorem inpus names counr Lorem inpus
              names counr
            </p>
            <p>Цена: 700$</p>
            <button>
              {" "}
              <a
                href="https://next.privat24.ua/"
                target="_blank"
                rel="noreferrer"
              >
                Купить
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
