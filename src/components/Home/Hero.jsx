import React from 'react';

const Hero = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
      <h1>Soar Above the Extraordinary</h1>
      <p>Experience breathtaking aerial tours, exclusive helicopter charters, and unforgettable adventures with SkyLife Travel.</p>
      <button style={{ background: '#ffd700', border: 'none', padding: '12px 24px', margin: '10px', cursor: 'pointer' }}>Explore Tours →</button>
      <button style={{ background: 'transparent', border: '2px solid white', padding: '12px 24px', margin: '10px', cursor: 'pointer', color: 'white' }}>Watch Demo</button>
    </div>
  );
};

export default Hero;