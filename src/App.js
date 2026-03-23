
import React from 'react';
import ActionButton from './Button';
import FormulaireAccueil from './JSXDemo';
import DataFetcher from './DataLoader';
import CounterWidget from './Counter';
import WelcomeMessage from './Greeting';

function App() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px'
      }}>
        🚀 Projet React - Ikram
      </h1>

      {/* Boutons avec différentes variantes */}
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '20px 0'
      }}>
        <ActionButton 
          text="Cliquez ici" 
          onPress={() => alert('Bonjour de Ikram !')}
          variant="primary"
          size="large"
          icon="🚀"
        />

        <ActionButton 
          text="Supprimer" 
          onPress={() => alert('Supprimé !')}
          variant="danger"
          size="small"
          icon="🗑️"
        />

        <ActionButton 
          text="Valider" 
          onPress={() => alert('Validé !')}
          variant="success"
          fullWidth={false}
          icon="✅"
        />
      </div>

      {/* Formulaire avec input */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        margin: '20px 0',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h3>📝 Formulaire de contact</h3>
        <FormulaireAccueil />
      </div>

      {/* Message de bienvenue personnalisé */}
      <div style={{ 
        backgroundColor: '#e8f4fd', 
        padding: '15px', 
        borderRadius: '10px',
        margin: '20px 0',
        textAlign: 'center'
      }}>
        <WelcomeMessage username="Ikram" />
      </div>

      {/* Compteur */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        margin: '20px 0',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h3>🔢 Compteur interactif</h3>
        <CounterWidget />
      </div>

      {/* Liste dynamique */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        margin: '20px 0',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h3>📋 Liste des participants</h3>
        <DataFetcher>
          {(data) => (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {data.map((item, index) => (
                <li key={item} style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '5px',
                  borderLeft: '3px solid #3498db'
                }}>
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          )}
        </DataFetcher>
      </div>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '30px', 
        padding: '20px',
        color: '#7f8c8d',
        borderTop: '1px solid #ddd'
      }}>
        <p>© 2026 - Réalisé par Ikram</p>
      </div>
    </div>
  );
}

export default App;