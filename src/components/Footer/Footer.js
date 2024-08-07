import "./Footer.scss";
import partner from "./silverPartnerLoxone.png";

export default function Footer() {
  return (
    <footer>
      <div>
        <h1>
          <a href="/">smart</a>
        </h1>
      </div>

      <div>
        <ul>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#our-services">Our Services</a>
          </li>
          <li>
            <a href="#our-products">Our Products</a>
          </li>
          <li>
            <a href="#contact-us">Contact us</a>
          </li>
        </ul>
        <h2>Dane firmy</h2>
        <p>Jakub Wietrzyk</p>
        <p>
          Grodzka 14/2
          <br />
          58-100 Świdnica
        </p>
        <p>NIP PL8852560942</p>
        <p>+48 729 086 677</p>
        <p>
          Obszar działania:
          <br />
          Wrocław, Strzegom, Świdnica, <br />
          Wałbrzych, Oława
        </p>
        <img alt="silver partner" src={partner} />
      </div>
    </footer>
  );
}
