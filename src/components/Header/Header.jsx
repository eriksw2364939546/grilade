import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { header_logo, phone_icon } from "../../services/images";
import { ShoppingCart } from "lucide-react";

const Header = ({ cartCount = 0, openCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-items row">
          {/* Логотип */}
          <Link to="/" className="header-logo" onClick={handleLinkClick}>
            <img
              src={header_logo}
              alt="Grillade Chez Le Sang"
              className="header-logo__image"
            />
          </Link>

          {/* Навигация */}
          <nav className="header-nav row">
            <Link to="/" className="header-link">
              Accueil
            </Link>
            <Link to="/menu" className="header-link">
              Menu
            </Link>
            <Link to="/a-propos" className="header-link">
              À propos
            </Link>
            <Link to="/avis" className="header-link">
              Avis
            </Link>
            <Link to="/contact" className="header-link">
              Contact
            </Link>
          </nav>

          {/* Десктопный блок действий */}
          <div className="header-actions">
            {/* Кнопка корзины с бейджем количества товаров */}
            <button
              className="cart-header-btn"
              onClick={openCart}
              aria-label="Panier"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <div className="phone-line"></div>

            <a href="tel:+33759599674" className="header-phone-widget">
              <div className="phone-top">
                <img src={phone_icon} alt="Phone" className="phone-icon" />
                <span className="phone-number">07 59 59 96 74</span>
              </div>
              <span className="phone-subtitle">
                Contactez-nous pour commander
              </span>
            </a>
          </div>

          {/* Мобильная кнопка телефона (по центру) */}
          <a href="tel:+33759599674" className="mobile-phone-btn">
            <img src={phone_icon} alt="Phone" className="phone-icon" />
            <span className="mobile-phone-number">07 59 59 96 74</span>
          </a>

          {/* Бургер-меню (справа) */}
          <button
            className={`burger-btn ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <Link to="/" className="mobile-link" onClick={handleLinkClick}>
            Accueil
          </Link>
          <Link to="/menu" className="mobile-link" onClick={handleLinkClick}>
            Menu
          </Link>
          <Link
            to="/a-propos"
            className="mobile-link"
            onClick={handleLinkClick}
          >
            À propos
          </Link>
          <Link to="/avis" className="mobile-link" onClick={handleLinkClick}>
            Avis
          </Link>
          <Link to="/contact" className="mobile-link" onClick={handleLinkClick}>
            Contact
          </Link>
        </nav>

        <div className="mobile-actions">
          {/* Кнопка корзины для мобильного меню */}
          <button
            className="cart-mobile-btn"
            onClick={() => {
              setIsMenuOpen(false);
              openCart();
            }}
          >
            <ShoppingCart size={20} />
            <span>Panier ({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
