import "./MenuCard.scss";
import { menu_bg } from "../../services/images";

const MenuCard = ({
  item,
  setSelectedDish,
  cart = [],
  addToCart,
  removeFromCart,
}) => {
  const cartItem = cart?.find((i) => i.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div
      className="menu-card"
      onClick={() => setSelectedDish && setSelectedDish(item)}
    >
      {/* Метка популярности */}
      {item.isPopular && <span className="popular-badge">Populaire</span>}

      {/* Круглое фото */}
      <div className="card-img-wrapper">
        <img
          src={item.image || menu_bg}
          alt={item.name}
          className="card-img"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = menu_bg;
          }}
        />
        <div className="card-price-badge">
          <span>{item.price} €</span>
        </div>
      </div>

      {/* Текст */}
      <div className="card-body">
        <h3 className="card-name">{item.name}</h3>
        <p className="card-description">{item.description}</p>

        {/* Зона управления количеством */}
        <div
          className="card-action-container"
          onClick={(e) => e.stopPropagation()}
        >
          {quantity === 0 ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (addToCart) addToCart(item);
              }}
              className="card-add-btn btn-commander"
            >
              + Ajouter
            </button>
          ) : (
            <div className="quantity-selector">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (removeFromCart) removeFromCart(item.id);
                }}
                className="qty-btn"
              >
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (addToCart) addToCart(item);
                }}
                className="qty-btn"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
