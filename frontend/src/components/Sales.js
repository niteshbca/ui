import React from 'react';
import { Link } from 'react-router-dom';

const Sales = () => {
  return (
    <div style={styles.container}>
      <div style={styles.omSymbol}>ॐ</div>
      <h2 style={styles.header}>Godown Transport</h2>
      <div style={styles.buttonContainer}>
        <Link to="/sale" style={styles.link}>
          <button style={styles.button}>Sales</button>
        </Link>
        <Link to="/history" style={styles.link}>
          <button style={styles.button}>History</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(-45deg, #fcb900, #9900ef, #ff6900, #00ff07)',
    animation: 'backgroundAnimation 4s linear infinite',
    backgroundSize: '300% 300%',
    position: 'relative',
    padding: '20px',
  },
  omSymbol: {
    position: 'absolute',
    top: '10%',
    fontSize: '184px',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'omAnimation 3s ease-in-out infinite',
    textAlign: 'center',
  },
  header: {
    fontSize: '44px',
    color: 'white',
    marginBottom: '30px',
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1.4rem',
    backgroundColor: 'gray',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  buttonHover: {
    backgroundColor: '#45a049',
    transform: 'scale(1.05)',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

// Add global CSS for keyframes
const styleSheet = document.styleSheets[0];

// Keyframes for background animation
const backgroundKeyframes = `
  @keyframes backgroundAnimation {
    0% { background-position: 0% 50%; }
    25% { background-position: 50% 50%; }
    50% { background-position: 100% 50%; }
    75% { background-position: 50% 100%; }
    100% { background-position: 0% 50%; }
  }
`;

// Keyframes for Om symbol animation
const omKeyframes = `
  @keyframes omAnimation {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
`;

// Insert keyframes into the stylesheet
styleSheet.insertRule(backgroundKeyframes, styleSheet.cssRules.length);
styleSheet.insertRule(omKeyframes, styleSheet.cssRules.length);

export default Sales;
