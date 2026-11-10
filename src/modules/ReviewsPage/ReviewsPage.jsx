import Reviews from "../HomePage/Reviews/Reviews";
import FloatingReviewsIcons from "../../components/FloatingReviewsIcons/FloatingReviewsIcons";
import "./ReviewsPage.scss";

const ReviewsPage = () => {
  return (
    <div className="reviews-page-wrapper">
      {/* Летающие иконки отзывов и звезд */}
      <FloatingReviewsIcons />

      <div className="reviews-page-content">
        <Reviews isPage={true} />
      </div>
    </div>
  );
};

export default ReviewsPage;
