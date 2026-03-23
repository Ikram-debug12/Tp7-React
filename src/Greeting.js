import PropTypes from 'prop-types';

const WelcomeMessage = ({ username = 'Visiteur', date = new Date() }) => {
  const hours = date.getHours();
  let greeting;
  
  if (hours < 12) {
    greeting = '🌅 Bonjour';
  } else if (hours < 18) {
    greeting = '☀️ Bon après-midi';
  } else {
    greeting = '🌙 Bonsoir';
  }

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#e8f4fd',
      borderRadius: '12px',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#2c3e50', 
        fontSize: '2rem',
        marginBottom: '10px'
      }}>
        {greeting}, {username} ! 👋
      </h1>
      <p style={{ 
        color: '#7f8c8d', 
        fontSize: '1rem',
        marginTop: '10px'
      }}>
        {new Date().toLocaleDateString('fr-FR', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>
    </div>
  );
};

WelcomeMessage.propTypes = {
  username: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

export default WelcomeMessage;