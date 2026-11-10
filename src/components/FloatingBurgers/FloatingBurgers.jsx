import "./FloatingBurgers.scss";

const FloatingBurgers = () => {
  // Создаем массив из 9 бургеров со случайными параметрами
  const burgers = Array.from({ length: 9 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 90 + 5}%`,
    duration: `${Math.random() * 8 + 6}s`,
    delay: `${Math.random() * 5}s`,
    size: Math.floor(Math.random() * 20) + 40, // Размер от 40px до 60px
  }));

  return (
    <div className="floating-burgers-container">
      {burgers.map((b) => (
        <div
          key={b.id}
          className="floating-burger"
          style={{
            left: b.left,
            animationDuration: b.duration,
            animationDelay: b.delay,
            width: `${b.size}px`,
            height: `${b.size}px`,
          }}
        >
          {/* Детализированный и сочный SVG многослойного бургера */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="100%"
            height="100%"
          >
            {/* Нижняя булочка */}
            <path
              fill="#E0A96D"
              d="M64 384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-32H64v32z"
            />
            {/* Котлета */}
            <path
              fill="#5C3A21"
              d="M48 320h416c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
            />
            {/* Сыр (уголки) */}
            <path
              fill="#FFC107"
              d="M64 288l128 32H64v-32zm384 0v32H320l128-32z"
            />
            {/* Салат */}
            <path
              fill="#8BC34A"
              d="M32 256c16 0 32 16 48 16s32-16 48-16 32 16 48 16 32-16 48-16 32 16 48 16 32-16 48-16 32 16 48 16 32-16 48-16v16H32v-16z"
            />
            {/* Верхняя булочка */}
            <path
              fill="#F4C430"
              d="M452.8 208C436.5 116.4 357.5 48 256 48S75.5 116.4 59.2 208h393.6z"
            />
            {/* Кунжут на верхней булочке */}
            <circle cx="200" cy="110" r="8" fill="#FFF" opacity="0.8" />
            <circle cx="260" cy="95" r="8" fill="#FFF" opacity="0.8" />
            <circle cx="320" cy="120" r="8" fill="#FFF" opacity="0.8" />
            <circle cx="160" cy="140" r="8" fill="#FFF" opacity="0.8" />
            <circle cx="360" cy="150" r="8" fill="#FFF" opacity="0.8" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingBurgers;
