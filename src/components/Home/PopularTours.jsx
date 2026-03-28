import React from 'react';

const PopularTours = () => {
  return (
    <div style={{ padding: '60px 20px', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Popular Tours</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '40px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
            <h3>City Tour</h3>
            <p>2 hours - $299</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
            <h3>Mountain Tour</h3>
            <p>3 hours - $399</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px' }}>
            <h3>Sunset Tour</h3>
            <p>1.5 hours - $199</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTours;