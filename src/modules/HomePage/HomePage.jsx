import "./HomePage.scss";
import Alpha from "./Alpha/Alpha";
import Features from "./Features/Features";
import Menu from "./Menu/Menu";
import WhyUs from "./WhyUs/WhyUs";
import Reviews from "./Reviews/Reviews";

const HomePage = ({
  setOpenModal,
  setSelectedDish,
  cart,
  addToCart,
  removeFromCart,
}) => {
  return (
    <div className="home">
      <Alpha setOpenModal={setOpenModal} />
      <Features />

      {/* Передаем состояние и функции корзины в компонент Menu */}
      <Menu
        setOpenModal={setOpenModal}
        setSelectedDish={setSelectedDish}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      <WhyUs />
      <Reviews />
    </div>
  );
};

export default HomePage;
