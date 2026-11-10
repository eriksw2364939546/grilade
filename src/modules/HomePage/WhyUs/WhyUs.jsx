import "./WhyUs.scss";
import { Flame, Utensils, MapPin } from "lucide-react";

const WhyUs = () => {
  const advantages = [
    {
      id: 1,
      icon: <Flame size={36} />,
      title: "Feu de Bois & Barbecue Naturel",
      description:
        "Une cuisson authentique au charbon de bois pour un goût unique et des grillades incomparables.",
    },
    {
      id: 2,
      icon: <Utensils size={36} />,
      title: "Ingrédients 100% Halal & Frais",
      description:
        "Nous sélectionnons rigoureusement des produits frais et certifiés halal pour garantir la meilleure qualité.",
    },
    {
      id: 3,
      icon: <MapPin size={36} />,
      title: "Emplacement Idéal à Marseille",
      description:
        "Situé au 210 Av. de la Rose, 13013 Marseille, facilement accessible à deux pas du métro Frais Vallon.",
    },
  ];

  const phone = "33759599674";
  const addressUrl = "https://maps.app.goo.gl/hHAa1Wd1AHX5Wiw4A";

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="why-us-header">
          <span className="why-us-subtitle">Pourquoi Nous Choisir</span>
          <h2 className="why-us-title">L'Excellence & L'Authenticité</h2>
          <div className="why-us-line"></div>
        </div>

        <div className="why-us-grid">
          {advantages.map((item) => (
            <div key={item.id} className="why-us-card">
              <div className="why-us-icon-wrapper">{item.icon}</div>
              <h3 className="why-us-card-title">{item.title}</h3>
              <p className="why-us-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Блок с интерактивной картой и информацией */}
        <div className="why-us-map-container">
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
    </section>
  );
};

export default WhyUs;
