import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Helicopter Tours',
      description: 'Experience breathtaking aerial views of the city skyline, mountains, and coastline from a unique perspective.',
      price: 'From $199',
      icon: '🚁',
      image: 'https://images.unsplash.com/photo-1504373596241-abbcf7b669e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Private Charters',
      description: 'Exclusive helicopter charters for weddings, proposals, and special occasions with personalized service.',
      price: 'From $599',
      icon: '💎',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Photography Flights',
      description: 'Professional aerial photography sessions with doors-off options for stunning aerial shots.',
      price: 'From $299',
      icon: '📸',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sunset Tours',
      description: 'Romantic sunset flights with champagne toast as you watch the sun dip below the horizon.',
      price: 'From $249',
      icon: '🌅',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corporate Events',
      description: 'Impress clients and reward employees with unforgettable helicopter experiences.',
      price: 'Custom Quote',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Airport Transfers',
      description: 'Luxury helicopter transfers to and from airports, bypassing traffic in style.',
      price: 'From $149',
      icon: '✈️',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      {/* Hero Section with Helicopter Image */}
      <section className="hero" style={{ 
        minHeight: '30vh', 
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
          opacity: 0.3
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
            style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}
          >
            Our Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Experience the ultimate aerial adventures with our range of premium helicopter services
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}
                whileHover={{ 
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    fontSize: '3rem'
                  }}>
                    {service.icon}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.5rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ marginBottom: '1rem', color: '#666', lineHeight: '1.6' }}>
                    {service.description}
                  </p>
                  <p style={{ 
                    fontWeight: 'bold', 
                    color: '#764ba2', 
                    fontSize: '1.25rem',
                    marginTop: '1rem'
                  }}>
                    {service.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;