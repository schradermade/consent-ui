import React, { useState, useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import ConsentSection from './ConsentSection';

const ConsentModal = () => {
  const [visible, setVisible] = useState(false);
  // console.log('COOKIECONSENT:', CookieConsent.getConsent());

  useEffect(() => {
    const preferences = CookieConsent.getUserPreferences();
    const hasConsent =
      preferences &&
      preferences.acceptedCategories &&
      Object.values(preferences.acceptedCategories).some((val) => val);

    if (!hasConsent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    CookieConsent.acceptCategory(['necessary', 'marketing', 'analytics']);
    console.log('After clicked acceptAll:', CookieConsent.getUserPreferences());
    setVisible(false);
  };

  const acceptNecessary = () => {
    CookieConsent.acceptCategory(['necessary']);
    console.log('After clicked Necessary:', CookieConsent.getUserPreferences());
    setVisible(false);
  };

  if (!visible || !window.CookieConsent) {
    return null;
  }

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2 style={styles.title}>Your Cookie Settings</h2>
        <hr style={styles.lineBreak} />
        <p style={styles.text}>
          OtterBox asks you to accept cookies to offer a better experience, to
          personalize content and ads, to enable social media functionality and
          to analyze our performance and site traffic. Social media and
          advertising cookies of third parties are used to offer you social
          media functionalities and personalized ads.
        </p>
        <div style={styles.buttonContainer}>
          <button onClick={acceptAll} style={styles.acceptButton}>
            ACCEPT
          </button>
          <button onClick={acceptNecessary} style={styles.rejectButton}>
            MORE INFORMATION
          </button>
          <hr style={styles.lineBreak} />
          <p style={styles.text}>
            To get more information or amend your preferences, press the ‘more
            information’ button or visit "Cookie Settings" at the bottom of the
            website. To get more information about these cookies and the
            processing of your personal data, check our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  lineBreak: {
    borderColor: 'rgba(215, 202, 202, 0.5)',
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '24px 0',
  },
  text: {
    color: 'rgb(68, 68, 68)',
    fontSize: '16px',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: 100,
    margin: '-6px 0 20px 0',
  },
  title: {
    color: 'rgb(68, 68, 68)',
    lineHeight: '1',
    fontSize: '32px',
    WebkitFontSmoothing: 'antialiased',
    letterSpacing: '0.01em',
    margin: '0',
    wordSpacing: '-0.05em',
    fontWeight: 400,
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(114, 114, 114, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '2rem 1.5rem',
    borderRadius: '4px',
    width: '500px',
    height: '580px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
    zIndex: 1000,
    boxSizing: 'border-box',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  acceptButton: {
    color: 'rgb(68, 68, 68)',
    backgroundColor: '#FFCD0C',
    border: 'none',
    borderRadius: '1px',
    cursor: 'pointer',
    fontFamily: 'Avant Garde, sans-serif',
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '15px',
    height: '40px',
    width: '440px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rejectButton: {
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'black',
    border: 'none',
    borderRadius: '1px',
    cursor: 'pointer',
    fontFamily: 'Avant Garde, Arial, sans-serif',
    fontSize: '20px',
    fontWeight: 600,
    height: '40px',
    width: '440px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ConsentModal;
