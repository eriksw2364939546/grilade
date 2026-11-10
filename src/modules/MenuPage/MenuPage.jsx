import "./MenuPage.scss";
import MenuSection from "../../components/MenuSection/MenuSection";
import menuData from "../../data/menuData.json";
import FloatingBurgers from "../../components/FloatingBurgers/FloatingBurgers";

const MenuPage = ({
  setOpenModal,
  setSelectedDish,
  cart,
  addToCart,
  removeFromCart,
}) => {
  return (
    <main className="menu-page">
      <section className="menu-page__section">
        {/* Компонент фоновых бургеров */}
        <FloatingBurgers />

        <div className="menu-page__content">
          <MenuSection
            menuData={menuData}
            title="Notre Carte Complète"
            setOpenModal={setOpenModal}
            setSelectedDish={setSelectedDish}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isSlider={false}
          />
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
