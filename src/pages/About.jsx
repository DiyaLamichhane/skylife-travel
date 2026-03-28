import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiGlobe, FiHeart, FiCalendar, FiStar } from 'react-icons/fi';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: <FiUsers /> },
    { number: '50+', label: 'Expert Pilots', icon: <FiAward /> },
    { number: '25+', label: 'Destinations', icon: <FiGlobe /> },
    { number: '99.9%', label: 'Safety Record', icon: <FiHeart /> }
  ];

  const milestones = [
    { year: '2015', title: 'The Beginning', description: 'SkyLife Travel founded with 2 helicopters' },
    { year: '2017', title: 'Expansion', description: 'Added 5 new helicopters and expanded services' },
    { year: '2019', title: 'Recognition', description: 'Awarded "Best Helicopter Tour Operator"' },
    { year: '2021', title: 'Digital Innovation', description: 'Launched online booking platform' },
    { year: '2023', title: 'Sustainability', description: 'Introduced eco-friendly flight practices' },
    { year: '2025', title: 'Today', description: 'Trusted by over 10,000 happy customers' }
  ];

  const values = [
    { title: 'Safety First', description: 'Your safety is our top priority with rigorous maintenance and expert pilots', icon: '🛡️' },
    { title: 'Customer Excellence', description: 'Dedicated to providing unforgettable experiences', icon: '⭐' },
    { title: 'Innovation', description: 'Constantly improving our services and technology', icon: '💡' },
    { title: 'Sustainability', description: 'Committed to eco-friendly aviation practices', icon: '🌱' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ 
        minHeight: '40vh', 
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
            style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}
          >
            About SkyLife
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}
          >
            Your Premier Partner in Aerial Adventures
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '3rem 0', background: '#f8f9fa' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '1rem' }}>
                {stat.icon}
              </div>
              <h2 style={{ fontSize: '2.5rem', color: '#764ba2', marginBottom: '0.5rem' }}>
                {stat.number}
              </h2>
              <p style={{ color: '#666', fontSize: '1.1rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1.5rem' }}>
                Our Story
              </h2>
              <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
                Founded in 2015, SkyLife Travel began with a simple vision: to share the unparalleled beauty
                of aerial perspectives with adventure seekers worldwide.
              </p>
              <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
                What started as a small operation with just two helicopters has grown into one of the most
                trusted names in aerial tourism. Our commitment to safety, exceptional service, and creating
                unforgettable experiences has made us the preferred choice for helicopter tours.
              </p>
              <p style={{ color: '#666', lineHeight: '1.8' }}>
                Today, we operate a modern fleet of aircraft, employ experienced pilots, and serve thousands
                of happy customers each year.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              style={{
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Helicopter"
                style={{ width: '100%', height: 'auto' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem'
        }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '3rem' }}>
            Our Journey
          </h2>
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '4px',
              height: '100%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '2px'
            }}></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '2rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '45%',
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: index % 2 === 0 ? '-10px' : 'auto',
                    left: index % 2 !== 0 ? '-10px' : 'auto',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    background: '#764ba2',
                    borderRadius: '50%'
                  }}></div>
                  <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                    {milestone.year}
                  </h3>
                  <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>{milestone.title}</h4>
                  <p style={{ color: '#666' }}>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem'
        }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
            Our Values
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem', fontSize: '1.1rem' }}>
            What drives us to deliver excellence every day
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s'
                }}
                whileHover={{ transform: 'translateY(-10px)' }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {value.icon}
                </div>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#666' }}>{value.description}</p>
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
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            Ready for an Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1.1rem', marginBottom: '2rem' }}
          >
            Join thousands of happy customers who have experienced the magic of flight with SkyLife Travel
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'white',
              color: '#764ba2',
              border: 'none',
              padding: '12px 30px',
              fontSize: '1.1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.3s'
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.location.href = '/tours'}
          >
            Explore Tours →
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default About;