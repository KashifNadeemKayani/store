import React from 'react';
import styles from './Footer.module.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 The Little Stationer. All rights reserved.</p>
      <a href="https://wa.me/yourwhatsapplink" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
    </footer>
  );
}

export default Footer;
  