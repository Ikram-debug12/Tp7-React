import { useState } from 'react';

const CounterWidget = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  const reset = () => setValue(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>🔢 Mon Compteur</h2>
      <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3498db' }}>{value}</p>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <button onClick={decrement} style={buttonStyle}>➖</button>
        <button onClick={reset} style={{ ...buttonStyle, backgroundColor: '#f39c12' }}>🔄 Réinitialiser</button>
        <button onClick={increment} style={buttonStyle}>➕</button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '1.2rem',
  backgroundColor: '#3498db',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

export default CounterWidget;