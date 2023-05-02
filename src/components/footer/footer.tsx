import './footer.scss';
import lang from './footer.lang.json';
import React from 'react';

export default function Footer() {
  const text = lang.en;

  return (
    <footer className="footer">
      <h2 className="footer-text">{text.title}</h2>
    </footer>
  );
}
