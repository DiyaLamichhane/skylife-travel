import React from 'react';
import { Link } from 'react-router-dom';
import { FiCompass, FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiSend } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
      color: '#fff',
      marginTop: '4rem',
      padding: '3rem 0 1rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2rem'
        }}>
          {/* Logo Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <FiCompass style={{ fontSize: '2rem', color: '#FFD966' }} />
              <h3 style={{ fontSize: '1.5rem', margin: 0, color: '#FFD966' }}>SkyLife Travel</h3>
            </div>
            <p style={{ color: '#f0f0f0', lineHeight: '1.6', marginBottom: '1rem' }}>
              Experience the world from above with premium helicopter tours and unforgettable aerial adventures.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#fff', fontSize: '1.2rem', transition: 'color 0.3s' }}
                 onMouseEnter={(e) => e.target.style.color = '#FFD966'}
                 onMouseLeave={(e) => e.target.style.color = '#fff'}>
                <FiFacebook />
              </a>
              <a href="#" style={{ color: '#fff', fontSize: '1.2rem', transition: 'color 0.3s' }}
                 onMouseEnter={(e) => e.target.style.color = '#FFD966'}
                 onMouseLeave={(e) => e.target.style.color = '#fff'}>
                <FiTwitter />
              </a>
              <a href="#" style={{ color: '#fff', fontSize: '1.2rem', transition: 'color 0.3s' }}
                 onMouseEnter={(e) => e.target.style.color = '#FFD966'}
                 onMouseLeave={(e) => e.target.style.color = '#fff'}>
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFD966', marginBottom: '1rem', fontSize: '1.2rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/about" style={{ color: '#f0f0f0', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#FFD966'}
                      onMouseLeave={(e) => e.target.style.color = '#f0f0f0'}>
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/services" style={{ color: '#f0f0f0', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#FFD966'}
                      onMouseLeave={(e) => e.target.style.color = '#f0f0f0'}>
                  Our Services
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/tours" style={{ color: '#f0f0f0', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#FFD966'}
                      onMouseLeave={(e) => e.target.style.color = '#f0f0f0'}>
                  Popular Tours
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/heliflight" style={{ color: '#f0f0f0', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#FFD966'}
                      onMouseLeave={(e) => e.target.style.color = '#f0f0f0'}>
                  Helicopter Flights
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/contact" style={{ color: '#f0f0f0', textDecoration: 'none', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#FFD966'}
                      onMouseLeave={(e) => e.target.style.color = '#f0f0f0'}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#FFD966', marginBottom: '1rem', fontSize: '1.2rem' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#f0f0f0' }}>
                <FiMapPin /> 123 Skyline Drive, New York
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#f0f0f0' }}>
                <FiPhone /> +1 (555) 123-4567
              </li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#f0f0f0' }}>
                <FiMail /> info@skylifetravel.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: '#FFD966', marginBottom: '1rem', fontSize: '1.2rem' }}>Newsletter</h4>
            <p style={{ color: '#f0f0f0', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Subscribe for exclusive offers and updates
            </p>
            <form style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Your email"
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <button 
                type="submit"
                style={{
                  background: '#FFD966',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: '#2c3e50',
                  fontWeight: 'bold',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '1.5rem',
          textAlign: 'center',
          color: '#f0f0f0',
          fontSize: '0.85rem'
        }}>
          <p>&copy; {currentYear} SkyLife Travel. All rights reserved. | Designed with ✈️ for aviation enthusiasts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;