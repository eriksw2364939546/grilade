import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import MenuCard from "../MenuCard/MenuCard";

import "swiper/css";
import "swiper/css/navigation";
import "./MenuSection.scss";

const MenuSection = ({
  menuData,
  title = "Notre Menu Interactif",
  setOpenModal,
  setSelectedDish,
  cart,
  addToCart,
  removeFromCart,
  isSlider = false,
  showPagination = true,
}) => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = [
    "Tous",
    ...new Set(menuData.map((item) => item.category)),
  ];

  const filteredMenu =
    activeCategory === "Tous"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="container">
      <h2 className="menu-title">{title}</h2>

      {!isSlider && (
        <div className="menu-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {isSlider ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          loop={menuData.length > 4}
          navigation={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="menu-swiper"
        >
          {menuData.map((item) => (
            <SwiperSlide key={item.id}>
              <MenuCard
                item={item}
                setOpenModal={setOpenModal}
                setSelectedDish={setSelectedDish}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="menu-grid">
          {filteredMenu.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              setOpenModal={setOpenModal}
              setSelectedDish={setSelectedDish}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSection;
