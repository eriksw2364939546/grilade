import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../../modules/HomePage/HomePage";
import MenuPage from "../../modules/MenuPage/MenuPage";
import AboutPage from "../../modules/AboutPage/AboutPage";
import ReviewsPage from "../../modules/ReviewsPage/ReviewsPage";
import ContactPage from "../../modules/ContactPage/ContactPage";
import MentionsLegalesPage from "../../modules/MentionsLegalesPage/MentionsLegalesPage";
import PrivacyPolicyPage from "../../modules/PrivacyPolicyPage/PrivacyPolicyPage";

import ModalDishDetails from "../../components/ModalDishDetails/ModalDishDetails";
import ModalCart from "../../components/ModalCart/ModalCart";

const App = () => {
  // 1. Инициализируем корзину из localStorage
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("restaurant_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null); // Модалка деталей блюда

  // 2. Сохраняем корзину в localStorage при каждом изменении
  useEffect(() => {
    try {
      localStorage.setItem("restaurant_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  // Функции управления корзиной
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i,
        );
      }
      return prev.filter((i) => i.id !== itemId);
    });
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // 3. Функция отправки заказа напрямую в WhatsApp
  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    let message = "Bonjour ! Je souhaite passer une commande :\n\n";
    cart.forEach((item) => {
      const name = item.name || item.title || item.nom;
      message += `- ${name} (x${item.quantity}) : ${item.price * item.quantity} €\n`;
    });
    message += `\n*Total : ${totalAmount} €*`;

    const phone = "33759599674";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    // Очищаем корзину после отправки
    setCart([]);
    localStorage.removeItem("restaurant_cart");
    setCartModalOpen(false);
  };

  return (
    <BrowserRouter>
      {/* Шапка сайта */}
      <Header
        setOpenModal={() => setCartModalOpen(true)}
        cartCount={totalCartItems}
        openCart={() => setCartModalOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setOpenModal={() => setCartModalOpen(true)}
              setSelectedDish={setSelectedDish}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <MenuPage
              setOpenModal={() => setCartModalOpen(true)}
              setSelectedDish={setSelectedDish}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/avis" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route
          path="/politique-de-confidentialite"
          element={<PrivacyPolicyPage />}
        />
      </Routes>

      {/* Футер сайта (теперь отображается на всех страницах) */}
      <Footer />

      {/* Модалка деталей блюда */}
      <ModalDishDetails
        isOpen={Boolean(selectedDish)}
        onClose={() => setSelectedDish(null)}
        item={selectedDish}
        addToCart={addToCart}
      />

      {/* Модалка корзины */}
      <ModalCart
        isOpen={isCartModalOpen}
        onOpen={() => setCartModalOpen(true)}
        onClose={() => setCartModalOpen(false)}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        onCheckout={handleWhatsAppCheckout}
      />
    </BrowserRouter>
  );
};

export default App;
