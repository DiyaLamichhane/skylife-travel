import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiAlertCircle } from 'react-icons/fi';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Initialize demo account when component loads
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if demo user already exists
    const demoExists = users.some(user => user.email === 'demo@skylife.com');
    
    if (!demoExists) {
      // Create demo user
      const demoUser = {
        id: Date.now(),
        name: 'Demo User',
        email: 'demo@skylife.com',
        password: 'demo123',
        createdAt: new Date().toISOString()
      };
      users.push(demoUser);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Find user - case insensitive email comparison
    const user = users.find(u => 
      u.email.toLowerCase() === email.toLowerCase() && 
      u.password === password
    );
    
    if (user) {
      setSuccess('Login successful! Redirecting...');
      localStorage.setItem('currentUser', JSON.stringify(user));
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      setError('Invalid email or password. Try demo@skylife.com / demo123');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      setError('Email already registered');
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email: email.toLowerCase(),
      password,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    setSuccess('Account created successfully! Please login.');
    setTimeout(() => {
      setIsLogin(true);
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      setSuccess('');
    }, 2000);
  };

  // Auto-fill demo credentials
  const fillDemoCredentials = () => {
    setFormData({
      ...formData,
      email: 'demo@skylife.com',
      password: 'demo123'
    });
    setError('');
  };

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
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}
          >
            {isLogin ? 'Sign in to access your account' : 'Join SkyLife Travel for exclusive offers'}
          </motion.p>
        </div>
      </section>

      {/* Login/Signup Form */}
      <main style={{ padding: '2rem 0', minHeight: '60vh' }}>
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto', 
          padding: '0 2rem'
        }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: 'white',
              borderRadius: '15px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            {/* Error/Success Messages */}
            {error && (
              <div style={{
                background: '#fee',
                color: '#c33',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FiAlertCircle />
                <span>{error}</span>
              </div>
            )}
            
            {success && (
              <div style={{
                background: '#efe',
                color: '#3c3',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>✓</span>
                <span>{success}</span>
              </div>
            )}

            {isLogin ? (
              // Login Form
              <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    <FiMail style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    <FiLock style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Password
                  </label>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    width: '100%',
                    padding: '12px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Sign In
                </button>
              </form>
            ) : (
              // Sign Up Form
              <form onSubmit={handleSignUp}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    <FiUser style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    <FiMail style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    <FiLock style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Password
                  </label>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password (min 6 characters)"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: '500' }}>
                    <FiLock style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Confirm Password
                  </label>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <button 
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    width: '100%',
                    padding: '12px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Create Account
                </button>
              </form>
            )}

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setSuccess('');
                  setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#667eea',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  textDecoration: 'underline'
                }}
              >
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
              </button>
            </div>

            {/* Demo Account Info */}
            {isLogin && (
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                  Demo Account:
                </p>
                <p style={{ fontSize: '0.85rem', color: '#667eea', marginBottom: '0.5rem' }}>
                  Email: demo@skylife.com<br />
                  Password: demo123
                </p>
                <button
                  onClick={fillDemoCredentials}
                  style={{
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    marginTop: '0.5rem'
                  }}
                >
                  Auto-fill Demo Credentials
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Login;