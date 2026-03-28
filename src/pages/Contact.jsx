import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}
          >
            Get in touch with us for bookings, inquiries, or any questions
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <main style={{ padding: '2rem 0' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ color: '#667eea', marginBottom: '2rem', fontSize: '1.8rem' }}>Get in Touch</h2>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiMapPin style={{ color: '#764ba2', fontSize: '1.5rem' }} />
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>Address</h3>
                  <p style={{ color: '#666' }}>123 Skyline Drive, New York, NY 10001</p>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiPhone style={{ color: '#764ba2', fontSize: '1.5rem' }} />
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>Phone</h3>
                  <p style={{ color: '#666' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiMail style={{ color: '#764ba2', fontSize: '1.5rem' }} />
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>Email</h3>
                  <p style={{ color: '#666' }}>info@skylifetravel.com</p>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FiClock style={{ color: '#764ba2', fontSize: '1.5rem' }} />
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>Hours</h3>
                  <p style={{ color: '#666' }}>Mon-Sun: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{ color: '#667eea', marginBottom: '2rem', fontSize: '1.8rem' }}>Send us a Message</h2>
              <form>
                <div style={{ marginBottom: '1rem' }}>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <textarea 
                    placeholder="Your Message"
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit'
                    }}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '12px 30px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
