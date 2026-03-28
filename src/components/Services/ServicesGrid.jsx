import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCompass, 
  FiMap, 
  FiCamera, 
  FiUsers, 
  FiClock, 
  FiStar,
  FiChevronRight,
  FiInfo
} from 'react-icons/fi';
import './ServicesGrid.css';

const ServicesGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: FiCompass,
      title: 'Helicopter Tours',
      description: 'Experience breathtaking aerial views with our guided helicopter tours. Perfect for sightseeing, photography, and special occasions.',
      features: [
        'Professional pilots with 1000+ flight hours',
        'State-of-the-art helicopters',
        'Customizable routes',
        'Safety briefing included'
      ],
      price: 'From $299',
      duration: '30-120 mins',
      popular: true,
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3'
    },
    {
      id: 2,
      icon: FiMap,
      title: 'Custom Routes',
      description: 'Create your own adventure with personalized flight paths. Visit landmarks, natural wonders, or create unique aerial experiences.',
      features: [
        'Tailored to your preferences',
        'Flexible scheduling',
        'Multiple landing options',
        'Private tours available'
      ],
      price: 'Custom quote',
      duration: 'Flexible',
      popular: false,
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3'
    },
    {
      id: 3,
      icon: FiCamera,
      title: 'Aerial Photography',
      description: 'Capture stunning aerial shots with our photography-focused tours. Ideal for photographers, content creators, and special events.',
      features: [
        'Removable doors for unobstructed views',
        'Photographer-friendly routes',
        'Sunset golden hour slots',
        'Professional editing available'
      ],
      price: 'From $399',
      duration: '45-120 mins',
      popular: true,
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3'
    },
    {
      id: 4,
      icon: FiUsers,
      title: 'Group Charters',
      description: 'Perfect for corporate events, team building, or group celebrations. Enjoy the experience together with our group packages.',
      features: [
        'Multiple helicopters for larger groups',
        'Group discounts available',
        'Catering options',
        'Event coordination included'
      ],
      price: 'From $999',
      duration: '2-4 hours',
      popular: false,
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3'
    },
    {
      id: 5,
      icon: FiClock,
      title: 'Sunset/Sunrise Tours',
      description: 'Witness the most magical moments of the day from above. Perfect for romantic getaways and special occasions.',
      features: [
        'Prime time slots reserved',
        'Champagne service available',
        'Professional photos included',
        'Private experience'
      ],
      price: 'From $449',
      duration: '45 mins',
      popular: true,
      image: 'https://images.unsplash.com/photo-1504373596241-abbcf7b669e2?ixlib=rb-4.0.3'
    },
    {
      id: 6,
      icon: FiStar,
      title: 'Premium Experiences',
      description: 'Ultimate luxury helicopter experiences with VIP treatment. Includes exclusive access and premium amenities.',
      features: [
        'VIP lounge access',
        'Champagne and gourmet snacks',
        'Professional photography package',
        'Souvenir video recording'
      ],
      price: 'From $1299',
      duration: '3 hours',
      popular: false,
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="services-grid-container">
      <div className="services-header">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Discover unforgettable aerial experiences tailored to your needs
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="services-grid"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            className={`service-card ${service.popular ? 'popular' : ''}`}
            onClick={() => setSelectedService(service)}
          >
            {service.popular && (
              <div className="service-popular-badge">
                <FiStar /> Most Popular
              </div>
            )}
            <div className="service-icon">
              <service.icon />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-details">
              <div className="service-price">{service.price}</div>
              <div className="service-duration">{service.duration}</div>
            </div>
            <button className="service-btn">
              Learn More <FiChevronRight />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Service Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="service-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedService(null)}>
              ×
            </button>
            <div className="modal-image">
              <img src={selectedService.image} alt={selectedService.title} />
            </div>
            <div className="modal-content">
              <div className="modal-icon">
                <selectedService.icon />
              </div>
              <h2 className="modal-title">{selectedService.title}</h2>
              <p className="modal-description">{selectedService.description}</p>
              
              <div className="modal-features">
                <h4>What's Included:</h4>
                <ul>
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx}>
                      <FiChevronRight /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-info">
                <div className="modal-price">
                  <span>Price:</span>
                  <strong>{selectedService.price}</strong>
                </div>
                <div className="modal-duration">
                  <span>Duration:</span>
                  <strong>{selectedService.duration}</strong>
                </div>
              </div>

              <button className="modal-book-btn">Book This Service</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ServicesGrid;
