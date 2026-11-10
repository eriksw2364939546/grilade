import "./alpha.scss";
import { alpha_bg } from "../../../services/images";

const Alpha = ({ setOpenModal }) => {
  return (
    <section
      className="alpha"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.7), rgba(9, 9, 11, 0.7)), url(${alpha_bg})`,
      }}
    >
      <div className="container">
        <div className="alpha-content">
          <h1 className="alpha-title">
            Grillades Halal au Barbecue Authentique à Marseille
          </h1>

          {/* Бейджи */}
          <div className="alpha-badges">
            <span className="badge">100% Halal</span>
            <span className="badge">Cuisson Barbecue</span>
            <span className="badge">Frites Maison</span>
          </div>

          {/* Кнопки СТА */}
          <div className="alpha-actions row">
            <a href="#menu" className="btn-alpha">
              Voir le Menu
            </a>
            <button
              onClick={() => setOpenModal(true)}
              className="btn-commander"
            >
              Commander
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alpha;
