import PropTypes from 'prop-types';
import React from 'react';

const ActionButton = ({ 
  text = 'Cliquez', 
  onPress, 
  variant = 'primary', 
  disabled = false,
  size = 'medium',
  icon = null,
  fullWidth = false
}) => {
  const styles = {
    primary: {
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.3s ease',
    },
    secondary: {
      backgroundColor: '#95a5a6',
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.3s ease',
    },
    danger: {
      backgroundColor: '#e74c3c',
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.3s ease',
    },
    success: {
      backgroundColor: '#27ae60',
      color: '#fff',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.3s ease',
    },
  };

  const sizes = {
    small: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
    },
    medium: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
    large: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
    },
  };

  const currentStyle = {
    ...styles[variant] || styles.primary,
    ...sizes[size] || sizes.medium,
    ...(fullWidth && { width: '100%' })
  };

  const handleClick = (event) => {
    if (!disabled && onPress) {
      onPress(event);
    }
  };

  return (
    <button
      type="button"
      style={currentStyle}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
      {text}
    </button>
  );
};

ActionButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default ActionButton;