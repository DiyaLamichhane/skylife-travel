import React from 'react';
import { motion } from 'framer-motion';

const Heliflight = () => {
  const features = [
    {
      title: 'Luxury Experience',
      description: 'Premium helicopters with leather seats, climate control, and panoramic windows',
      icon: '💺'
    },
    {
      title: 'Expert Pilots',
      description: 'Highly trained pilots with years of experience and excellent safety records',
      icon: '👨‍✈️'
    },
    {
      title: 'Safety First',
      description: 'Regular maintenance checks and strict safety protocols for peace of mind',
      icon: '🛡️'
    },
    {
      title: 'Scenic Routes',
      description: 'Carefully planned routes showcasing the most beautiful views',
      icon: '🏔️'
    },
    {
      title: 'Flexible Booking',
      description: 'Easy online booking with free cancellation up to 24 hours before',
      icon: '📅'
    },
    {
      title: 'Private Charters',
      description: 'Exclusive flights for special occasions, corporate events, and celebrations',
      icon: '🎉'
    }
  ];

  return (
    <>
      {/* Hero Section */}
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
            style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}
          >
            Helicopter Flights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Experience the ultimate aerial adventure with our premium helicopter services
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <main style={{ padding: '2rem 0' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '1rem'
          }}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
                whileHover={{ 
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Heliflight;