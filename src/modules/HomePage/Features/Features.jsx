import "./Features.scss";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      titlePart1: "Viandes ",
      titlePart2: "100% Halal",
      description:
        "Des viandes sélectionnées avec soin, certifiées 100% halal, pour une qualité irréprochable et un goût authentique.",
    },
    {
      id: 2,
      titlePart1: "Cuisson ",
      titlePart2: "au Barbecue",
      description:
        "Une cuisson traditionnelle au charbon de bois pour des saveurs fumées uniques et des grillades incomparables.",
    },
    {
      id: 3,
      titlePart1: "Frites ",
      titlePart2: "Maison",
      description:
        "Accompagnez vos plats de nos délicieuses frites maison croustillantes, préparées chaque jour sur place.",
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {featuresData.map((item) => (
            <div key={item.id} className="feature-card">
              {/* Иконка гамбургера (SVG) */}
              <div className="feature-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF6600"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" />
                  <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" />
                  <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" />
                  <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
                </svg>
              </div>

              {/* Заголовок карточки */}
              <h3 className="feature-title">
                {item.titlePart1}
                <span className="highlight">{item.titlePart2}</span>
              </h3>

              {/* Описание */}
              <p className="feature-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
