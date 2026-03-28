import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiStar, FiUsers, FiAward, FiMapPin } from 'react-icons/fi';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    { icon: '🚁', title: 'Expert Pilots', description: 'Highly trained professionals with years of experience' },
    { icon: '✨', title: 'Luxury Experience', description: 'Premium helicopters with panoramic windows' },
    { icon: '🛡️', title: 'Safety First', description: 'Rigorous maintenance and safety protocols' },
    { icon: '📸', title: 'Photo Opportunities', description: 'Capture breathtaking aerial moments' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', text: 'An unforgettable experience! The views were absolutely breathtaking.', rating: 5, image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Michael Chen', text: 'Professional service from start to finish. Highly recommended!', rating: 5, image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Emily Rodriguez', text: 'Best tour I\'ve ever taken. The pilot was amazing and knowledgeable.', rating: 5, image: 'https://randomuser.me/api/portraits/women/3.jpg' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '85vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1504373596241-abbcf7b669e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          animation: 'zoomIn 20s ease-in-out infinite'
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 'bold' }}>
              Soar Above the Extraordinary
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
              Experience breathtaking aerial tours, exclusive helicopter charters, 
              and unforgettable adventures with SkyLife Travel.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/tours')}
                style={{
                  background: '#ffd700',
                  color: '#333',
                  border: 'none',
                  padding: '14px 32px',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s'
                }}
              >
                Explore Tours →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/heliflight')}
                style={{
                  background: 'transparent',
                  border: '2px solid white',
                  color: 'white',
                  padding: '14px 32px',
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s'
                }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}
          >
            Why Choose SkyLife?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}
          >
            Experience the difference with our premium helicopter services
          </motion.p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: '#f8f9fa',
                  borderRadius: '15px',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>{feature.title}</h3>
                <p style={{ color: '#666' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours Preview */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}
          >
            Popular Helicopter Tours
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}
          >
            Our most requested aerial adventures
          </motion.p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { name: 'City Lights Tour', duration: '1 hour', price: '$199', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Mountain Adventure', duration: '2 hours', price: '$349', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Sunset Special', duration: '1 hour', price: '$229', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => navigate('/tours')}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: '#667eea', marginBottom: '0.5rem' }}>{tour.name}</h3>
                  <p style={{ color: '#666', marginBottom: '0.5rem' }}>{tour.duration}</p>
                  <p style={{ fontWeight: 'bold', color: '#764ba2', fontSize: '1.25rem' }}>{tour.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/tours')}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '12px 32px',
                fontSize: '1rem',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              View All Tours <FiArrowRight style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#333' }}
          >
            What Our Customers Say
          </motion.h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: '#f8f9fa',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}
              >
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    marginBottom: '1rem',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} style={{ color: '#ffd700', fill: '#ffd700', display: 'inline-block' }} />
                  ))}
                </div>
                <p style={{ color: '#666', marginBottom: '1rem', fontStyle: 'italic' }}>"{testimonial.text}"</p>
                <h4 style={{ color: '#667eea' }}>{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', marginBottom: '1rem' }}
          >
            Ready for the Adventure of a Lifetime?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: '2rem' }}
          >
            Book your helicopter tour today and experience the world from above
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            style={{
              background: '#ffd700',
              color: '#333',
              border: 'none',
              padding: '12px 32px',
              fontSize: '1.1rem',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Contact Us Now
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Home;