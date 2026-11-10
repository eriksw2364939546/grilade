import "./ModalCart.scss";
import { ShoppingCart } from "lucide-react";
import { menu_bg } from "../../services/images";

const formatPrice = (value) =>
  Number(value).toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const ModalCart = ({
  isOpen,
  onClose,
  onOpen,
  cart,
  addToCart,
  removeFromCart,
  onCheckout,
}) => {
  const totalItems = cart
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;
  const totalAmount = cart
    ? cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
    : 0;

  const isCartEmpty = !cart || cart.length === 0;

  return (
    <>
      {/* 1. Плавающая панель снизу */}
      {!isOpen && !isCartEmpty && (
        <div className="floating-cart-bar" onClick={onOpen}>
          <div className="floating-cart-content container">
            <div className="floating-cart-left">
              <div className="floating-cart-icon-wrapper">
                <ShoppingCart size={22} />
                <span className="floating-badge">{totalItems}</span>
              </div>
              <span className="floating-text">Voir mon panier</span>
            </div>
            <div className="floating-cart-right">
              <span className="floating-price">
                {formatPrice(totalAmount)} €
              </span>
              <span className="floating-arrow">➔</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Модальное окно корзины */}
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div
            className="modal-content cart-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose}>
              &times;
            </button>

            <h2 className="modal-title">Votre Panier</h2>

            {isCartEmpty ? (
              <div className="cart-empty">
                Votre panier est actuellement vide. Ajoutez des produits pour
                les consulter.
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img
                        className="cart-item-img"
                        src={item.image || menu_bg}
                        alt={item.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = menu_bg;
                        }}
                      />

                      <div className="cart-item-info">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <span className="cart-item-price-unit">
                          {formatPrice(item.price)} €
                        </span>
                      </div>

                      <div className="cart-item-controls">
                        <button onClick={() => removeFromCart(item.id)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>

                      <div className="cart-item-total">
                        {formatPrice(Number(item.price) * item.quantity)} €
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div className="cart-total-row">
                    <span>Total :</span>
                    <span className="cart-total-price">
                      {formatPrice(totalAmount)} €
                    </span>
                  </div>

                  <button
                    className="btn-commander checkout-btn"
                    onClick={onCheckout}
                  >
                    Commander maintenant
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCart;
