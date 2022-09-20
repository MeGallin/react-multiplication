import React from 'react';
import './FooterComponent.scss';

export const FooterComponent = () => {
  return (
    <footer className="footer__wrapper">
      <div>
        Developed by{' '}
        <a href="https://garyallin.uk" target="_blank" rel="noreferrer">
          Gary Allin
        </a>
      </div>
    </footer>
  );
};
