import React from 'react';

const Button = ({ children, variant = 'primary', onClick, type = 'button', ...props }) => {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <button className={className} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
