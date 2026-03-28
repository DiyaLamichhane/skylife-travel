import React from 'react';
import { motion } from 'framer-motion';
import './Tours.css';

const Tours = () => {
  const tours = [
    {
      name: 'City Lights Tour',
      duration: '1 hour',
      price: '$199',
      description: 'See the city skyline at night with breathtaking views of illuminated landmarks.',
      icon: '🌃',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mountain Adventure',
      duration: '2 hours',
      price: '$349',
      description: 'Fly over majestic mountains and witness nature\'s grandeur from above.',
      icon: '⛰️',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Coastal Paradise',
      duration: '1.5 hours',
      price: '$279',
      description: 'Beautiful coastal views with pristine beaches and crystal clear waters.',
      icon: '🏖️',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Sunset Special',
      duration: '1 hour',
      price: '$229',
      description: 'Romantic sunset experience with champagne and stunning golden hour views.',
      icon: '🌅',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Private VIP Tour',
      duration: '3 hours',
      price: '$699',
      description: 'Customized luxury experience with premium service and exclusive routes.',
      icon: '💎',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Photography Tour',
      duration: '2 hours',
      price: '$399',
      description: 'Perfect for photographers with doors-off options for stunning aerial shots.',
      icon: '📸',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Helicopter Safari',
      duration: '2.5 hours',
      price: '$449',
      description: 'Wildlife spotting from above with expert guides and binoculars provided.',
      icon: '🦒',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Romantic Getaway',
      duration: '1.5 hours',
      price: '$389',
      description: 'Perfect for couples with champagne, chocolates, and secluded landing spots.',
      icon: '❤️',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Adventure Express',
      duration: '45 mins',
      price: '$149',
      description: 'Quick but thrilling aerial adventure perfect for first-timers.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1504373596241-abbcf7b669e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
            style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}
          >
            Popular Helicopter Tours
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Choose from our selection of breathtaking aerial adventures
          </motion.p>
        </div>
      </section>

      {/* Tours Grid - Full width with no empty space */}
      <main style={{ padding: '2rem 0' }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: '0 2rem',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
            marginTop: '1rem',
            width: '100%'
          }}>
            {tours.map((tour, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                whileHover={{ 
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  flexShrink: 0
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    fontSize: '2.5rem',
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {tour.icon}
                  </div>
                </div>
                <div style={{ 
                  padding: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <h3 style={{ 
                      color: '#667eea', 
                      fontSize: '1.25rem', 
                      margin: 0,
                      flex: 1
                    }}>
                      {tour.name}
                    </h3>
                    <span style={{ 
                      background: '#764ba2', 
                      color: 'white', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      whiteSpace: 'nowrap'
                    }}>
                      {tour.duration}
                    </span>
                  </div>
                  <p style={{ 
                    marginBottom: '1rem', 
                    color: '#666', 
                    lineHeight: '1.5', 
                    fontSize: '0.9rem',
                    flex: 1
                  }}>
                    {tour.description}
                  </p>
                  <p style={{ 
                    fontWeight: 'bold', 
                    color: '#764ba2', 
                    fontSize: '1.25rem',
                    marginTop: '0.5rem',
                    borderTop: '1px solid #eee',
                    paddingTop: '0.75rem'
                  }}>
                    {tour.price}
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

export default Tours;