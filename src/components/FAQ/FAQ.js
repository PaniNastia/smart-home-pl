import "./FAQ.scss";
import { useState } from "react";

export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState(-1);
  return (
    <section id="FAQ">
      <div>
        <h2>Pytania & odpowiedzi</h2>
        <h3>Często zadavane pytania</h3>
        <ul className="custom-list">
          <li className={faqOpen === 0 ? "open" : "closed"}>
            <h4>What is a Smart Home System?</h4>
            <a
              onClick={(e) => {
                e.preventDefault();
                setFaqOpen(faqOpen === 0 ? -1 : 0);
              }}
              href="#"
            >
              +
            </a>
            <p>
              Vitae tortor arcu eleifend nec massa dictum purus. Erat varius
              vulputate orci lacus gravida molestie habitant. Convallis massa
              hac proin rutrum nisl habitasse. Amet etiam dignissim.
            </p>
          </li>
          <li className={faqOpen === 1 ? "open" : "closed"}>
            <h4>How does a smart home system work?</h4>
            <a
              onClick={(e) => {
                e.preventDefault();
                setFaqOpen(faqOpen === 1 ? -1 : 1);
              }}
              href="#"
            >
              +
            </a>
            <p>
              Vitae tortor arcu eleifend nec massa dictum purus. Erat varius
              vulputate orci lacus gravida molestie habitant. Convallis massa
              hac proin rutrum nisl habitasse. Amet etiam dignissim.
            </p>
          </li>
          <li className={faqOpen === 2 ? "open" : "closed"}>
            <h4>Are smart home systems secure?</h4>
            <a
              onClick={(e) => {
                e.preventDefault();
                setFaqOpen(faqOpen === 2 ? -1 : 2);
              }}
              href="#"
            >
              +
            </a>
            <p>
              Vitae tortor arcu eleifend nec massa dictum purus. Erat varius
              vulputate orci lacus gravida molestie habitant. Convallis massa
              hac proin rutrum nisl habitasse. Amet etiam dignissim.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <p>Masz inne pytannia?</p>
        <p>
          <a className="btn" href="#contact-us">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
