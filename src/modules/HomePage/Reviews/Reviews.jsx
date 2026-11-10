import { useEffect, useRef, useState } from "react";
import FloatingReviewsIcons from "../../../components/FloatingReviewsIcons/FloatingReviewsIcons";
import "./Reviews.scss";

const Reviews = ({ isPage = false }) => {
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?2764490846b2638f01461dfe483";
    script.async = true;
    container.appendChild(script);

    const checkInterval = setInterval(() => {
      if (container.innerText) {
        if (container.innerText.includes("forfait gratuit")) {
          setHasError(true);
          container.innerHTML = "";
          clearInterval(checkInterval);
        } else if (container.children.length > 0) {
          setIsChecking(false);
          clearInterval(checkInterval);
        }
      }
    }, 200);

    const timeout = setTimeout(() => {
      if (isChecking && container.innerText.includes("forfait gratuit")) {
        setHasError(true);
      }
      setIsChecking(false);
    }, 2000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <section className={`reviews-section ${isPage ? "reviews-page-mode" : ""}`}>
      <div className="container">
        <div className="reviews-header" style={{ position: "relative" }}>
          <FloatingReviewsIcons />
          <span className="reviews-subtitle">Avis Client</span>
          <h2 className="reviews-title">Ce Que Disent Nos Clients</h2>
          <div className="reviews-line"></div>
        </div>

        <div
          className="trustindex-widget-container"
          ref={containerRef}
          style={{
            display: hasError ? "none" : "flex",
            opacity: isChecking ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        ></div>

        {hasError && (
          <div className="custom-reviews-fallback">
            <div className="reviews-rating-card">
              <div className="rating-info">
                <span className="google-logo">Google</span>
                <span className="rating-text">Excellent</span>
                <div className="stars">★★★★★</div>
                <span className="rating-score">4.5 / 5 (32 avis)</span>
              </div>
              <p className="fallback-desc">
                Merci à tous nos clients pour vos retours chaleureux ! Retrouvez
                tous nos avis et partagez votre expérience directement sur notre
                page Google.
              </p>
              <a
                href="https://www.google.com/maps/place/Grillade+Chez+Le+Sang/@43.33089,5.4376685,15z/data=!4m6!3m5!1s0x12c9bf003f609b19:0x21ab60d2c52870f6!8m2!3d43.3296534!4d5.4290137"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-commander"
              >
                Écrire un avis sur Google
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
