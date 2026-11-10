import MenuSection from "../../../components/MenuSection/MenuSection";
import { menu_banner } from "../../../services/images";
import menuData from "../../../data/menuData.json";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = ({
  setOpenModal,
  setSelectedDish,
  cart,
  addToCart,
  removeFromCart,
}) => {
  const popularDishes = menuData.filter((item) => item.isPopular);

  return (
    <section
      id="menu"
      className="menu"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.60), rgba(9, 9, 11, 0.80)), url(${menu_banner})`,
      }}
    >
      <MenuSection
        menuData={popularDishes}
        setOpenModal={setOpenModal}
        setSelectedDish={setSelectedDish}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isSlider={true}
        showPagination={false}
      />

      {/* Кнопка-ссылка на полное меню */}
      <div
        className="menu-footer-btn-container"
        style={{ textAlign: "center", marginTop: "40px" }}
      >
        <Link to="/menu" className="btn-view-all btn-commander">
          Voir tout le menu
        </Link>
      </div>
    </section>
  );
};

export default Menu;
