import "./FloatingReviewsIcons.scss";

const FloatingReviewsIcons = () => {
  const iconsData = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 80 + 10}%`,
    duration: `${Math.random() * 5 + 4}s`,
    delay: `${Math.random() * 3}s`,
    size: Math.floor(Math.random() * 10) + 24, // Размер от 24px до 34px
    type: index % 3,
  }));

  return (
    <div className="reviews-floating-header-container">
      {iconsData.map((item) => (
        <div
          key={item.id}
          className={`floating-icon-item type-${item.type}`}
          style={{
            left: item.left,
            animationDuration: item.duration,
            animationDelay: item.delay,
            width: `${item.size}px`,
            height: `${item.size}px`,
          }}
        >
          {item.type === 0 && (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#FFC107">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
          {item.type === 1 && (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#ff6600">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0-2-.9-2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          )}
          {item.type === 2 && (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#22c55e">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingReviewsIcons;
