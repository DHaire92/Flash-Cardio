import React from 'react';
import './Header.scss';

const Header = ({children}) => {
  return (
    <header className="flashcardio-header">
      <h1 className="header-title">{children}</h1>
    </header>
  );
};

export default Header;
