import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        {/* Заголовок страницы */}
        <div className="contact-header">
          <span className="contact-subtitle">Contactez-nous</span>
          <h2 className="contact-title">Venez Nous Rendre Visite</h2>
          <div className="contact-line"></div>
        </div>

        <div className="contact-content-grid">
          {/* Левая колонка: Информация и координаты */}
          <div className="contact-info-card">
            <h3>Grillade Chez Le Sang</h3>
            <p className="contact-desc">
              Le meilleur de la grillade à Marseille. Des viandes d'exception,
              préparées avec passion et authenticité. Venez nous rendre visite
              ou contactez-nous directement par téléphone pour commander.
            </p>

            <ul className="contact-details-list">
              <li>
                <span className="icon">📍</span>
                <div>
                  <strong>Adresse :</strong>
                  <a
                    href="https://maps.app.goo.gl/hHAa1Wd1AHX5Wiw4A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    210 Av. de la Rose, 13013 Marseille
                  </a>
                </div>
              </li>
              <li>
                <span className="icon">📞</span>
                <div>
                  <strong>Téléphone principal :</strong>
                  <a href="tel:0759599674">07 59 59 96 74</a>
                </div>
              </li>
              <li>
                <span className="icon">📱</span>
                <div>
                  <strong>Téléphone (Livraison / Direct) :</strong>
                  <a href="tel:+33615739574">+33 6 15 73 95 74</a>
                </div>
              </li>
              <li>
                <span className="icon">🕒</span>
                <div>
                  <strong>Horaires :</strong>
                  <p>Lun – Dim : 11:00 – 00:00</p>
                </div>
              </li>
            </ul>

            <a
              href="https://maps.app.goo.gl/ej18EqhPM3iHnznH9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-commander"
            >
              Ouvrir dans Google Maps
            </a>
          </div>

          {/* Правая колонка: Карта (iframe Google Maps в темных тонах) */}
          <div className="contact-map-container">
            <iframe
              title="Grillade Chez Le Sang Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.551717904033!2d5.4290137!3d43.3296534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf003f609b19%3A0x21ab60d2c52870f6!2sGrillade%20Chez%20Le%20Sang!5e0!3m2!1sru!2sfr!4v1710000000000!5m2!1sru!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
