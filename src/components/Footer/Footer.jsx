import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiUbereats, SiDeliveroo } from "react-icons/si";
import "./Footer.scss";

const UBER_EATS_URL =
  "https://www.ubereats.com/fr/store/grillade-chez-le-sang/sygzA3nUUVCPIyeFE7RxHQ";
const DELIVEROO_URL =
  "https://deliveroo.fr/en/menu/Marseille/la-rose/grillade-chez-le-sang/?geohash=speysc01k6xk";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Открыто с 11:00 до 00:00
  useEffect(() => {
    const checkOpenStatus = () => {
      const currentHour = new Date().getHours();
      setIsOpen(currentHour >= 11);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Колонка 1: О заведении / Бренд */}
          <div className="footer-col">
            <h3 className="footer-logo">Grillade Chez Le Sang</h3>
            <p className="footer-about">
              Le meilleur de la grillade à Marseille. Des viandes d'exception,
              préparées avec passion et authenticité.
            </p>
            <div className={`status-badge ${isOpen ? "open" : "closed"}`}>
              <span className="status-dot"></span>
              {isOpen
                ? "Ouvert — Venez nous rendre visite !"
                : "Fermé — Ouvre à 11:00"}
            </div>
          </div>

          {/* Колонка 2: Контакты и Адрес */}
          <div className="footer-col">
            <h4 className="footer-title">Contact & Localisation</h4>
            <ul className="footer-links">
              <li>
                <span>📍</span>
                <a
                  href="https://maps.app.goo.gl/hHAa1Wd1AHX5Wiw4A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  210 Av. de la Rose, 13013 Marseille
                </a>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:0759599674">07 59 59 96 74</a>
              </li>
              <li>
                <span>🕒</span>
                <span>Lun – Dim : 11:00 – 00:00</span>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Сервисы доставки */}
          <div className="footer-col">
            <h4 className="footer-title">Commandez en Ligne</h4>
            <p className="footer-text">
              Retrouvez-nos plats chez vous en quelques clics :
            </p>
            <div className="delivery-buttons">
              <a
                href={UBER_EATS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="delivery-btn uber"
              >
                <SiUbereats />
              </a>
              <a
                href={DELIVEROO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="delivery-btn deliveroo"
              >
                <SiDeliveroo />
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя полоса с копирайтом и ссылкой */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Grillade Chez Le Sang. Tous droits
            réservés.{" "}
            <Link to="/mentions-legales" className="footer-legal-link">
              Mentions Légales
            </Link>{" "}
            •{" "}
            <Link
              to="/politique-de-confidentialite"
              className="footer-legal-link"
            >
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
