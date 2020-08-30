import React from 'react';
import logo from '../../assets/pokedex-logo.png'

import './styles.scss'

function Header() {
  return (
    <React.Fragment>
      <header>
          <img src={logo} className="img" alt="Pokedex Logo"/>
      </header>
    </React.Fragment>
  );
}

export default Header;