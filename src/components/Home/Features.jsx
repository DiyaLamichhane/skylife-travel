import React from 'react';

const Features = () => {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Our Features</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '40px' }}>
        <div>
          <h3>✈️ Expert Pilots</h3>
          <p>Experienced and certified professionals</p>
        </div>
        <div>
          <h3>🚁 Modern Fleet</h3>
          <p>Latest aircraft with safety features</p>
        </div>
        <div>
          <h3>🌍 Scenic Routes</h3>
          <p>Most beautiful aerial views</p>
        </div>
      </div>
    </div>
  );
};

export default Features;