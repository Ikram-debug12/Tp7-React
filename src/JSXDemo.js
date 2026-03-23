import { useState } from 'react';

const FormulaireAccueil = () => {
  const [nom, setNom] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const messageBienvenue = (
    <h1 style={{ 
      color: '#3498db', 
      fontSize: '1.8rem',
      marginBottom: '20px'
    }}>
      🎉 Bienvenue dans l'application
    </h1>
  );

  const handleChangement = (e) => {
    setNom(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      {messageBienvenue}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label 
            htmlFor="nomUtilisateur" 
            style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#2c3e50'
            }}
          >
            📝 Votre prénom :
          </label>
          <input
            type="text"
            id="nomUtilisateur"
            value={nom}
            onChange={handleChangement}
            placeholder="ex: Ikram"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        
        <button
          type="submit"
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          👋 Se présenter
        </button>
      </form>
      
      {submitted && nom && (
        <p style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#d4edda',
          color: '#155724',
          borderRadius: '6px',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          ✨ Bonjour, {nom} ! Bienvenue parmi nous ✨
        </p>
      )}
      
      {!submitted && nom && (
        <p style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#e8f4fd',
          color: '#3498db',
          borderRadius: '6px',
          textAlign: 'center'
        }}>
          👤 Bonjour, {nom} ! Cliquez sur "Se présenter" pour valider
        </p>
      )}
    </div>
  );
};

export default FormulaireAccueil;