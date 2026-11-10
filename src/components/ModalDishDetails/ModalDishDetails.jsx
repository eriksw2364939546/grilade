import "./ModalDishDetails.scss";
import { menu_bg } from "../../services/images";

const ModalDishDetails = ({ isOpen, onClose, item, addToCart }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="dish-modal-overlay" onClick={onClose}>
      <div className="dish-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="dish-modal-body">
          {/* Метка популярности, если есть */}
          {item.isPopular && (
            <span className="dish-popular-badge">Populaire</span>
          )}

          {/* Картинка блюда */}
          <div className="dish-img-container">
            <img
              src={item.image || menu_bg}
              alt={item.name}
              className="dish-modal-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = menu_bg;
              }}
            />
            <div className="dish-price-tag">
              <span>{item.price} €</span>
            </div>
          </div>

          {/* Информация о блюде */}
          <div className="dish-info">
            <span className="dish-category-tag">{item.category}</span>
            <h2 className="dish-modal-title">{item.name}</h2>
            {item.description && (
              <p className="dish-modal-description">{item.description}</p>
            )}

            <div className="dish-modal-actions">
              <button
                className="btn-commander"
                onClick={() => {
                  addToCart(item);
                  onClose();
                }}
              >
                + Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDishDetails;
