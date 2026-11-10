import "./AboutPage.scss";

const AboutPage = () => {
  const phone = "33759599674";
  const addressUrl = "https://maps.app.goo.gl/hHAa1Wd1AHX5Wiw4A";

  return (
    <div className="about-page">
      <div className="container">
        {/* Заголовок страницы */}
        <div className="about-header">
          <span className="about-subtitle">Notre Histoire & Localisation</span>
          <h1 className="about-title">Grillade Chez Le Sang</h1>
          <div className="about-line"></div>
        </div>

        {/* Основной контент */}
        <div className="about-content-grid">
          {/* Текстовая информация */}
          <div className="about-text-column">
            <h2>L'Authenticité au Cœur de Marseille</h2>
            <p>
              Bienvenue chez <strong>Grillade Chez Le Sang</strong>, votre
              destination incontournable pour les amateurs de viandes
              d'exception et de grillades préparées dans les règles de l'art.
              Situé au cœur du 13ème arrondissement de Marseille, notre
              établissement vous accueille dans une ambiance chaleureuse et
              conviviale.
            </p>
            <p>
              Chaque pièce de viande est sélectionnée avec la plus grande
              rigueur pour garantir tendreté et saveurs authentiques. Que vous
              veniez en famille, entre amis ou pour une pause gourmande, notre
              équipe met tout en œuvre pour éveiller vos papilles.
            </p>

            <div className="about-info-box">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Adresse :</strong>
                  <p>210 Av. de la Rose, 13013 Marseille</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">🕒</span>
                <div>
                  <strong>Horaires :</strong>
                  <p>Lundi – Dimanche : 11:00 – 00:00</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <strong>Téléphone :</strong>
                  <p>
                    <a href={`tel:+${phone}`}>07 59 59 96 74</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Контейнер с картой (в точности как в WhyUs) */}
          <div className="why-us-map-container about-map-box">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.2647021105213!2d5.424562273780944!3d43.3296497348086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf003f609b19%3A0x21ab60d2c52870f6!2sGrillade%20Chez%20Le%20Sang!5e0!3m2!1sru!2sfr!4v1793192621472!5m2!1sru!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Grillade Chez Le Sang Map"
              ></iframe>
            </div>

            <div className="why-us-cta">
              <div className="why-us-cta-info">
                <span>📍 210 Av. de la Rose, 13013 Marseille</span>
                <a href={`tel:+${phone}`} className="why-us-cta-phone">
                  📞 07 59 59 96 74
                </a>
              </div>
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-commander"
              >
                Itinéraire Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
