// src/components/Card.js
import React from 'react';

const Card = ({ title }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '200px' }}>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
