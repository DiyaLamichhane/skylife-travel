import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiUsers, FiStar, FiHeart } from 'react-icons/fi';
import './TourCard.css';

const TourCard = ({ tour, featured = false, onBookNow }) => {
  const {
    id,
    name,
    location,
    duration,
    capacity,
    price,
    image,
    description,
    rating,
    reviews,
    features
  } = tour;

  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      className={`tour-card ${featured ? 'featured' : ''}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {featured && (
        <div className="tour-badge">
          <FiStar /> Featured
        </div>
      )}
      
      <div className="tour-card-image">
        <img src={image} alt={name} />
        <div className="tour-card-price">{price}</div>
        <button className="tour-card-like" onClick={handleLike}>
          <FiHeart className={isLiked ? 'liked' : ''} />
        </button>
      </div>

      <div className="tour-card-content">
        <div className="tour-card-header">
          <h3 className="tour-card-title">{name}</h3>
          <div className="tour-card-rating">
            <FiStar className="star-icon" />
            <span>{rating}</span>
            <span className="reviews">({reviews} reviews)</span>
          </div>
        </div>

        <div className="tour-card-location">
          <FiMapPin />
          <span>{location}</span>
        </div>

        <p className="tour-card-description">{description}</p>

        <div className="tour-card-info">
          <div className="tour-card-info-item">
            <FiClock />
            <span>{duration}</span>
          </div>
          <div className="tour-card-info-item">
            <FiUsers />
            <span>{capacity}</span>
          </div>
        </div>

        {features && features.length > 0 && (
          <div className="tour-card-features">
            {features.slice(0, 3).map((feature, index) => (
              <span key={index} className="feature-tag">
                {feature}
              </span>
            ))}
            {features.length > 3 && (
              <span className="feature-tag more">+{features.length - 3}</span>
            )}
          </div>
        )}

        <div className="tour-card-footer">
          <Link to={`/booking/${id}`} className="tour-card-btn" onClick={onBookNow}>
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
